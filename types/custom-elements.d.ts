declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      url?: string;
      'events-target'?: string;
      ar?: string | boolean;
      shadow?: string | boolean;
    };
  }
}
