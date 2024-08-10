"use client";

import { RootState } from "@/store/store";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeMirror from "@uiw/react-codemirror";
import { color } from "@uiw/codemirror-extensions-color";
import { langs, LanguageName } from "@uiw/codemirror-extensions-langs";
import { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { themes } from "@/data/themes";
import createTheme from "@uiw/codemirror-themes";
import { CardMacOSColorMain } from "../Window/Cards/CardMacOSColorControls";
import { CardMacOSGrayMain } from "../Window/Cards/CardMacOSGrayControls";
import { CardMacOSOutlineMain } from "../Window/Cards/CardMacOSOutlineControls";
import { CardWindowMain } from "../Window/Cards/CardWindowControls";

const baseExtensions: Extension = [];

export const CodeEditor = () => {
  const dispatch = useDispatch();
  const {
    background,
    backgroundWindow,
    linenumber,
    language,
    theme,
    width,
    height,
    opacity,
    radius,
    headerWindowControls,
    headerWindow,
    watermark,
    padding,
    linestart,
    border,
  } = useSelector((state: RootState) => state.editorReducer);

  const [extensions, setExtensions] = useState<Extension[]>([]);
  const fontSize = 16;
  const lineWrapping = false;
  const readOnly = false;

  const basicSetup = useMemo(
    () => ({
      foldGutter: false,
      foldKeymap: false,
      searchKeymap: false,
      highlightActiveLine: false,
      highlightActiveLineGutter: false,
      drawSelection: false,
      rectangularSelection: false,
      highlightSelectionMatches: false,
      allowMultipleSelections: false,
      bracketMatching: false,
      highlightSpecialChars: false,
      syntaxHighlighting: false,
      autocompletion: false,
      lineNumbers: linenumber,
    }),
    [linenumber]
  );

  const t = useMemo(() => {
    const options = themes[theme]?.options;
    if (options) {
      const createdTheme = createTheme({
        ...options,
        settings: {
          ...options.settings,
          // background: 'transparent',
          // gutterBackground: 'transparent',
          gutterBorder: "transparent",
        },
      });

      return {
        extension: createdTheme,
        settings: options.settings, // Retorna las settings para usarlas más tarde
      };
    }
    return undefined;
  }, [theme]);

  console.log(t);

  useEffect(() => {
    setExtensions([
      baseExtensions,
      color,
      langs[language](),
      ...(lineWrapping ? [EditorView.lineWrapping] : []),
      EditorView.editable.of(!readOnly),
    ]);
  }, [language, lineWrapping, readOnly]);

  return (
    <div
      className="min-w-full h-full"
      style={{
        backgroundImage:
          "linear-gradient(45deg, #252525 25%, transparent 0), linear-gradient(-45deg, #252525 25%, transparent 0), linear-gradient(45deg, transparent 75%, #252525 0), linear-gradient(-45deg, transparent 75%, #252525 0)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
        borderRadius: radius + "px",
      }}
    >
      <div
        className="min-w-full h-full p-8 relative"
        style={{
          width: width + "px",
          padding: padding + "px",
          borderRadius: parseFloat(radius) - 10 + "px",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: background,
            opacity: opacity + "%",
            borderRadius: radius + "px",
          }}
        />
        <div
          className="relative bg-[#1E1E1E] w-full h-full"
          style={{
            borderRadius: radius + "px",
            boxShadow: `${
              border
                ? "0 0 0 1px rgba(0, 0, 0, .1), 0 0 0 1px rgba(0,0,0,.9), inset 0 0 0 1.5px rgba(255, 255, 255, .4)"
                : ""
            }`,
            padding: `${border ? "3px 2px" : "0px"}`,
          }}
        >
          {headerWindow && windowControls(headerWindowControls, t?.settings?.background || "defaultBackgroundColor")}
          <div className="w-full h-full">
            <CodeMirror
              value={`function onLoad(editor) { \n console.log("i've loaded");\n}`}
              height={`${headerWindow ? "calc(100% - 56px)" : "100%"}`}
              width="100%"
              extensions={extensions}
              theme={t}
              basicSetup={basicSetup}
              style={{
                fontSize,
                borderTopLeftRadius: `${headerWindow ? "" : radius + "px"}`,
                borderTopRightRadius: `${headerWindow ? "" : radius + "px"}`,
                borderBottomLeftRadius: radius + "px",
                borderBottomRightRadius: radius + "px",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


const windowControls = (value: string, background: string) => {
  switch (value) {
    case "macOS - Color":
      return <CardMacOSColorMain background={background} />;
    case "macOS - Gray":
      return <CardMacOSGrayMain background={background} />;
    case "macOS - Outline":
      return <CardMacOSOutlineMain background={background} />;
    default:
      return <CardWindowMain background={background} />;
  }
};
