import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/core";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getWspUrl } from "../../helpers";
import { orderDetails, resetState } from "../../recoil/state";

function ConfirmAlertModal({ showModal, setModal }) {
  const orderData = useRecoilValue(orderDetails);
  const reset = useSetRecoilState(resetState);

  const onClose = () => {
    setModal(false);
  };

  const onConfirm = () => {
    const WSP_URL = getWspUrl(orderData);
    window.open(WSP_URL, "_blank");
    setModal(false);
    reset();
  };

  return (
    <>
      <AlertDialog onClose={onClose} isOpen={showModal}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Confimar Orden?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>Será redirigido a una pestaña de whatsapp para enviar un mensaje con los detalles del pedido.</AlertDialogBody>
          <AlertDialogFooter>
            <Button variantColor="teal" ml={3} onClick={onConfirm}>
              SI
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default ConfirmAlertModal;
