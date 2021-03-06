/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface PageBootstrap {
    }
    interface PageHome {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLPageBootstrapElement extends Components.PageBootstrap, HTMLStencilElement {
    }
    var HTMLPageBootstrapElement: {
        prototype: HTMLPageBootstrapElement;
        new (): HTMLPageBootstrapElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "page-bootstrap": HTMLPageBootstrapElement;
        "page-home": HTMLPageHomeElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface PageBootstrap {
    }
    interface PageHome {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "page-bootstrap": PageBootstrap;
        "page-home": PageHome;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "page-bootstrap": LocalJSX.PageBootstrap & JSXBase.HTMLAttributes<HTMLPageBootstrapElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
        }
    }
}
