import { useState } from 'react'
import { Button, Flex, Modal, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { CreateCategory } from './create-category'

interface SelectWithButtonProps {
  mode?: 'multiple' | 'tags'
  selectPlaceholder?: string
  options?: { value: string, label: string }[]
}

export const SelectWithButton = ({
  mode = 'multiple',
  selectPlaceholder,
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
}: SelectWithButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Flex gap={2} align="center">
      <Select
        placeholder={selectPlaceholder}
        size="large"
        mode={mode}
        options={options}
      />

      <Button variant="outlined" size="large" onClick={toggleDropdown}>
        <PlusOutlined />
      </Button>

      <Modal
        centered
        title="Форма добавления категории"
        open={isOpen}
        onCancel={toggleDropdown}
        getContainer={() => document.body}
        footer={null}
      >
        <CreateCategory
          onClose={toggleDropdown}
        />
      </Modal>
    </Flex>
  )
}