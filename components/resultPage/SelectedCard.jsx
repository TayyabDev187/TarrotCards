import { useAppContext } from "@/pages/_app";

const SelectedCard = () => {
  const { prompt } = useAppContext();

  console.log(prompt, "CHECK");
  return (
    <div className="px-20 pt-40 mb-20 w-full flex justify-center">
      <img src={`Cards/${prompt.image}`} className="w-[20%]" />
    </div>
  );
};

export default SelectedCard;
