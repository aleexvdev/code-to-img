"use client";

import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";
import { CardMacOSColorMain } from "../Window/Cards/CardMacOSColorControls";
import { CardWindowMain } from "../Window/Cards/CardWindowControls";
import { CardMacOSGrayMain } from "../Window/Cards/CardMacOSGrayControls";
import { CardMacOSOutlineMain } from "../Window/Cards/CardMacOSOutlineControls";
//languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";
//themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";

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

  return (
    <div
      className="min-w-full h-full"
      style={{
        backgroundImage:
          "linear-gradient(45deg, #252525 25%, transparent 0), linear-gradient(-45deg, #252525 25%, transparent 0), linear-gradient(45deg, transparent 75%, #252525 0), linear-gradient(-45deg, transparent 75%, #252525 0)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
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
            padding: `${border ? "2px" : "0px"}`,
          }}
        >
          {headerWindow && windowControls(headerWindowControls)}
          <div className="w-full h-full">
            <AceEditor
              value={`function onLoad(editor) { \n console.log("i've loaded");\n}`}
              fontSize={16}
              wrapEnabled={true}
              showPrintMargin={false}
              highlightActiveLine={false}
              showGutter={linenumber}
              name="code-editor"
              editorProps={{ $blockScrolling: true }}
              className="code-editor"
              theme={theme.toLocaleLowerCase()}
              mode={language.toLocaleLowerCase()}
              height={`${headerWindow ? "calc(100% - 56px)" : "100%"}`}
              style={{
                borderTopLeftRadius: `${headerWindow ? "" : radius + "px"}`,
                borderTopRightRadius: `${headerWindow ? "" : radius + "px"}`,
                borderBottomLeftRadius: radius + "px",
                borderBottomRightRadius: radius + "px",
                padding: "16px",
              }}
              tabSize={1}
              setOptions={{
                firstLineNumber: parseInt(linestart.toString()),
                backgroundColor: `${backgroundWindow ? background : "none"}`,
              }}
            />
            {watermark && (
              <div className="absolute bottom-3 right-5 text-white text-wrap opacity-20 z-10 text-lg">
                CodeShot
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const windowControls = (value: string) => {
  switch (value) {
    case "macOS - Color":
      return <CardMacOSColorMain />;
    case "macOS - Gray":
      return <CardMacOSGrayMain />;
    case "macOS - Outline":
      return <CardMacOSOutlineMain />;
    default:
      return <CardWindowMain />;
  }
};
