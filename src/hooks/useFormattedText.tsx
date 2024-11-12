import { useMemo, ReactNode, ElementType } from "react";

interface UseFormattedTextOptions {
  texts: string[];
  placeholder?: string;
  Element?: ElementType;
  className?: string;
}

type UseFormattedTextResult = {
  [key: string]: ReactNode[];
};

const useFormattedText = ({
  texts,
  placeholder = "{span}",
  Element = "span",
  className,
}: UseFormattedTextOptions): UseFormattedTextResult => {
  return useMemo(() => {
    const formattedTexts: UseFormattedTextResult = {};

    texts.forEach((text, index) => {
      const parts = text.split(placeholder);
      formattedTexts[`text${index + 1}`] = parts.map((part, i) =>
        i % 2 === 1 ? (
          <Element key={i} className={className}>
            {part}
          </Element>
        ) : (
          part
        )
      );
    });

    return formattedTexts;
  }, [texts, placeholder, Element, className]);
};

export default useFormattedText;
