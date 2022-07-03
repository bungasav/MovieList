import { Button, Modal, Typography } from "antd";

function Categories({ detail, onClose = () => {} }) {
  return (
    <Modal
      visible={!!detail}
      title={detail?.name}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
      centered
      width={750}
    >
      {detail && (
        <iframe
          title={detail.name}
          width="100%"
          height="480px"
          src={detail.video}
        />
      )}
    </Modal>
  );
}

export default Categories;
