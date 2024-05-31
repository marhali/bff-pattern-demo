import {PropsWithChildren} from "react";

function CenterLayout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className="size-full flex items-center justify-center">
      {children}
    </div>
  )
}

export default CenterLayout;
