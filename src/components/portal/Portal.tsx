import { useState, useLayoutEffect, ReactNode } from "react";

import { createPortal } from "react-dom";
import "./Portal.css";

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

function Portal({
  children,
  wrapperId = "portal-wrapper",
  isOpen,
  closeHandler,
}: {
  children: ReactNode;
  wrapperId: string;
  isOpen: boolean;
  closeHandler: () => void;
}) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element: HTMLElement | null = document.getElementById(wrapperId);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(
    isOpen ? (
      <div className='portal'>
        <div className='portal_background' onClick={closeHandler}></div>
        <div className='portal_content'>
        {children}
        </div>
      </div>
    ) : null,
    wrapperElement
  );
}

export default Portal;