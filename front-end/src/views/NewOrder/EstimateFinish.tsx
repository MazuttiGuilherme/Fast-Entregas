import { useSelector } from "react-redux";
import { PayPalButton } from "../../components/PayPalButton";
import { selectCurrentEstimate } from "../../store/slices/estimateSlice";
import { OrderResponseBody } from "@paypal/paypal-js";
import { toast } from "react-toastify";

export function EstimateFinish() {
  const currentEstimate = useSelector(selectCurrentEstimate);
  if (!currentEstimate) {
    return null;
  }
  const handlePayPalSuccess = async (details: OrderResponseBody) => {
    console.log(details);
  };
  const handlePayPalError = () => {
    toast.error('Ocorreu um erro ao realizar o pagamento. Favor entrar em contato.')
  }
  return (
    <div className="mt-3">
      <PayPalButton
        value={currentEstimate.value}
        customId={currentEstimate.id}
        onSuccess={handlePayPalSuccess}
        onError={handlePayPalError}
      />
    </div>
  );
}
