import { Flex, Tag } from "antd"

interface TableTagsProps {
  data: string[]
}

export const TableTags = ({
  data,
}: TableTagsProps) => {
  return (
    <Flex gap={4} wrap>
      {data.slice(0, 3).map((amenity) => (
        <Tag key={amenity}>{amenity}</Tag>
      ))}
      {data.length > 3 && (
        <>+{data.length - 3}</>
      )}
    </Flex>
  )
}