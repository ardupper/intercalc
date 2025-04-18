import { useRef, useEffect } from "react";
import katex from "katex";

interface InlineMathProps {
  tex: string;
}

export function InlineMath({ tex }: InlineMathProps) {
  const markdown = useRef(null);

  useEffect(() => {
    if (markdown.current) {
      katex.render(tex, markdown.current, {
        throwOnError: false,
        output: "mathml",
      });
    }
  }, [tex]);

  return <span className="text-white" ref={markdown}></span>;
}
