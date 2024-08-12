"use client";

import { RootState } from "@/store/store";
import React, { CSSProperties, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeMirror from "@uiw/react-codemirror";
import { color } from "@uiw/codemirror-extensions-color";
import { langs } from "@uiw/codemirror-extensions-langs";
import { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { themes } from "@/data/themes";
import createTheme from "@uiw/codemirror-themes";
import { CardMacOSColorMain } from "../Window/Cards/CardMacOSColorControls";
import { CardMacOSGrayMain } from "../Window/Cards/CardMacOSGrayControls";
import { CardMacOSOutlineMain } from "../Window/Cards/CardMacOSOutlineControls";
import { CardWindowMain } from "../Window/Cards/CardWindowControls";
import { Resizable, ResizableProps } from "re-resizable";
import { setWidth } from "@/store/features/editorSlice";
import { CodeEditorSkeleton } from "./CodeEditorSkeleton";

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
      autocompletion: true,
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
          background: "transparent",
          gutterBackground: "transparent",
          gutterBorder: "transparent",
        },
      });

      return {
        extension: createdTheme,
        settings: options.settings,
      };
    }
    return undefined;
  }, [theme]);

  useEffect(() => {
    setExtensions([
      baseExtensions,
      color,
      langs[language](),
      ...(lineWrapping ? [EditorView.lineWrapping] : []),
      EditorView.editable.of(!readOnly),
    ]);
  }, [language, lineWrapping, readOnly, linestart]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleResizeStop: ResizableProps["onResizeStop"] = (
    e,
    direction,
    ref,
    delta
  ) => {
    const newWidth = ref.offsetWidth;
    dispatch(setWidth(newWidth));
  };

  return (
    <>
      {isLoading ? (
        <CodeEditorSkeleton />
      ) : (
        <Resizable
          defaultSize={{
            width: width,
          }}
          minWidth={550}
          enable={{
            top: false,
            right: true,
            bottom: false,
            left: true,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
          style={{ position: "relative" }}
          onResize={handleResizeStop}
        >
          <div
            className="h-auto bg-white"
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
                {headerWindow &&
                  windowControls(
                    headerWindowControls,
                    t?.settings?.background || "defaultBackgroundColor"
                  )}
                <div
                  className="w-full h-full relative"
                  style={{
                    padding: "10px",
                    height: `${headerWindow ? "calc(100% - 56px)" : "100%"}`,
                    background:
                      t?.settings?.background || "defaultBackgroundColor",
                    borderTopLeftRadius: `${headerWindow ? "" : radius + "px"}`,
                    borderTopRightRadius: `${
                      headerWindow ? "" : radius + "px"
                    }`,
                    borderBottomLeftRadius: radius + "px",
                    borderBottomRightRadius: radius + "px",
                  }}
                >
                  <CodeMirror
                    value={`function Counter() {\n  const [count, setCount] = createSignal(0);\n  setInterval(\n      () => setCount(count() + 1),\n      1000\n  );\n return <div>The count is {count()}</div>\n}\n}`}
                    width="100%"
                    extensions={extensions}
                    theme={t}
                    basicSetup={basicSetup}
                    style={{
                      fontSize,
                    }}
                  />
                  {watermark && (
                    <div className="absolute bottom-3 right-5 text-white text-wrap opacity-20 z-10 text-muted text-base">
                      CodeShot
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="leftBtnResize" />
          <div className="rightBtnResize" />
          <div className="h-10 bg-transparent w-full absolute">
            <div className="w-full h-full flex items-center justify-between pt-2">
              <div className="bg-white/50 w-0.5 h-full"></div>
              <div className="w-full bg-white/50 flex items-center justify-center h-0.5">
                <span className="bg-[#181818] text-white px-3 text-sm rounded-2xl">
                  {width} px
                </span>
              </div>
              <div className="bg-white/50 w-0.5 h-full"></div>
            </div>
          </div>
        </Resizable>
      )}
    </>
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
