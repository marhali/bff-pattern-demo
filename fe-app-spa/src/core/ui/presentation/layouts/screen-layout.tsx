import {PropsWithChildren} from "react";

function ScreenLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div className="w-screen h-screen">
      {children}
    </div>
  )
}

export default ScreenLayout;
