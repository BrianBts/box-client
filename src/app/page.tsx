import { TitleBox } from "commons";
import { DateBox } from "commons/DateBox";
import { ArrowLeft, ShortArrowIcon } from "commons/Icons";


export default function Home() {

  return (
    <main>
      <DateBox></DateBox>

      {/* <div className="m-10 flex gap-4 ">
      <TitleBox children="Creá tu cuenta" icon={<ArrowLeft></ArrowLeft>}></TitleBox>
      </div>
      <div className="m-10 flex gap-4 ">
      <TitleBox children="Repartos pendientes" variant="secondary" icon={<ShortArrowIcon></ShortArrowIcon>}></TitleBox>
      </div> */}
    </main>
  );

}
