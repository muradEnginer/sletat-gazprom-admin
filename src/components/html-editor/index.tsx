import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill, { type Range } from 'quill';
import 'quill/dist/quill.snow.css';

interface EditorProps {
  readOnly?: boolean;
  defaultValue?: string;
  onTextChange?: (text: string) => void;
  onSelectionChange?: (range: Range | null) => void;
}

const HtmlEditor = forwardRef<Quill | null, EditorProps>(
  ({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      if (ref && 'current' in ref) {
        ref.current?.enable(!readOnly);
      }
    }, [ref, readOnly]);

    useEffect(() => {
      const container = containerRef.current as HTMLDivElement;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement('div'),
      );
      const quill = new Quill(editorContainer, {
				modules: {
					toolbar: [
						[{ header: [1, 2, 3, 4, 5, 6, false] }],
						['bold', 'italic', 'underline'],
						['image', 'code-block'],
					],
				},
				placeholder: 'Введите текст...',
        theme: 'snow',
      });

      if (ref && 'current' in ref) {
        ref.current = quill;
      }

      if (defaultValueRef.current) {
        quill.clipboard.dangerouslyPasteHTML(defaultValueRef.current);
      }

      quill.on('text-change', () => {
        onTextChangeRef.current?.(quill.root.innerHTML);
      });

      quill.on('selection-change', (range) => {
        onSelectionChangeRef.current?.(range);
      });

      return () => {
        if (ref && 'current' in ref) {
          ref.current = null;
        }
        container.innerHTML = '';
      };
    }, [ref]);

    return <div ref={containerRef} style={{ width: '100%', height: '300px', marginBottom: 50 }} />;
  },
);

HtmlEditor.displayName = 'HtmlEditor';

export { HtmlEditor } ;