import*as e from"../../core/i18n/i18n.js";import*as o from"../../ui/legacy/legacy.js";const t={title:"Profiler ⚛",command:"Show React DevTools Profiler panel"},i=e.i18n.registerUIStrings("panels/react_devtools/react_devtools_profiler-meta.ts",t),r=e.i18n.getLazilyComputedLocalizedString.bind(void 0,i);let a;o.ViewManager.registerViewExtension({location:"panel",id:"react-devtools-profiler",title:r(t.title),commandPrompt:r(t.command),persistence:"permanent",order:1e3,loadView:async()=>new((await async function(){return a||(a=await import("./react_devtools.js")),a}()).ReactDevToolsProfilerView.ReactDevToolsProfilerViewImpl)});
