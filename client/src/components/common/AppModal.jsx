import { ActionIcon, Modal, Text } from "@mantine/core"
import { elementType, node, string } from "prop-types"
import { useRef, useState } from "react"

const AppModal = ({ children, Icon, title }) => {
  const [isOpened, setIsOpened] = useState(false)
  const actionIconRef = useRef()

  const handleClose = () => {
    setIsOpened(false)
    
  }
  const handleOpen = () => {
    setIsOpened(true)
    actionIconRef.current.blur() // prevent ActionIcon from focusing when modal is closed
  }

  return (
    <>
      <Modal
        opened={isOpened}
        onClose={handleClose}
        title={
          <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
            {title}
          </Text>
        }
      >
        {children}
      </Modal>

      <ActionIcon
        variant="default"
        size="lg"
        radius="md"
        onClick={handleOpen}
        ref={actionIconRef}
      >
        <Icon />
      </ActionIcon>
    </>
  )
}

AppModal.propTypes = {
  children: node.isRequired,
  Icon: elementType.isRequired,
  title: string.isRequired,
}

export default AppModal
