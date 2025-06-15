
```
WebDevIIFinalProject
├─ .idea
│  ├─ misc.xml
│  ├─ modules.xml
│  ├─ vcs.xml
│  ├─ WebDevIIFinalProject.iml
│  └─ workspace.xml
├─ DailyScrum.md
├─ group5budgettracker
│  ├─ build
│  │  ├─ favicon.ico
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  ├─ recharts
│  │  ├─ .babelrc
│  │  ├─ .editorconfig
│  │  ├─ .eslintrc
│  │  ├─ .husky
│  │  │  ├─ pre-commit
│  │  │  └─ pre-push
│  │  ├─ .prettierrc
│  │  ├─ CHANGELOG.md
│  │  ├─ chromatic.config.json
│  │  ├─ CONTRIBUTING.md
│  │  ├─ DEVELOPING.md
│  │  ├─ LICENSE
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ README.md
│  │  ├─ scripts
│  │  │  ├─ build.js
│  │  │  ├─ buildOutput.test.ts
│  │  │  ├─ check-build-diff.sh
│  │  │  ├─ install-react-16.sh
│  │  │  ├─ install-react-19.sh
│  │  │  ├─ release.sh
│  │  │  ├─ snapshots
│  │  │  │  ├─ es6Files.txt
│  │  │  │  ├─ libFiles.txt
│  │  │  │  ├─ markdownFiles.txt
│  │  │  │  ├─ typesFiles.txt
│  │  │  │  └─ umdFiles.txt
│  │  │  ├─ upload-bundle-analysis.js
│  │  │  └─ vitest-build.config.ts
│  │  ├─ src
│  │  │  ├─ animation
│  │  │  │  ├─ Animate.tsx
│  │  │  │  ├─ AnimationManager.ts
│  │  │  │  ├─ configUpdate.ts
│  │  │  │  ├─ easing.ts
│  │  │  │  ├─ timeoutController.ts
│  │  │  │  └─ util.ts
│  │  │  ├─ cartesian
│  │  │  │  ├─ Area.tsx
│  │  │  │  ├─ Bar.tsx
│  │  │  │  ├─ Brush.tsx
│  │  │  │  ├─ CartesianAxis.tsx
│  │  │  │  ├─ CartesianGrid.tsx
│  │  │  │  ├─ ErrorBar.tsx
│  │  │  │  ├─ Funnel.tsx
│  │  │  │  ├─ getEquidistantTicks.ts
│  │  │  │  ├─ getTicks.ts
│  │  │  │  ├─ GraphicalItemClipPath.tsx
│  │  │  │  ├─ Line.tsx
│  │  │  │  ├─ ReferenceArea.tsx
│  │  │  │  ├─ ReferenceDot.tsx
│  │  │  │  ├─ ReferenceLine.tsx
│  │  │  │  ├─ Scatter.tsx
│  │  │  │  ├─ XAxis.tsx
│  │  │  │  ├─ YAxis.tsx
│  │  │  │  └─ ZAxis.tsx
│  │  │  ├─ chart
│  │  │  │  ├─ AreaChart.tsx
│  │  │  │  ├─ BarChart.tsx
│  │  │  │  ├─ CartesianChart.tsx
│  │  │  │  ├─ CategoricalChart.tsx
│  │  │  │  ├─ ComposedChart.tsx
│  │  │  │  ├─ FunnelChart.tsx
│  │  │  │  ├─ LineChart.tsx
│  │  │  │  ├─ PieChart.tsx
│  │  │  │  ├─ PolarChart.tsx
│  │  │  │  ├─ RadarChart.tsx
│  │  │  │  ├─ RadialBarChart.tsx
│  │  │  │  ├─ RechartsWrapper.tsx
│  │  │  │  ├─ Sankey.tsx
│  │  │  │  ├─ ScatterChart.tsx
│  │  │  │  ├─ SunburstChart.tsx
│  │  │  │  ├─ Treemap.tsx
│  │  │  │  └─ types.ts
│  │  │  ├─ component
│  │  │  │  ├─ ActivePoints.tsx
│  │  │  │  ├─ Cell.tsx
│  │  │  │  ├─ Cursor.tsx
│  │  │  │  ├─ Customized.tsx
│  │  │  │  ├─ DefaultLegendContent.tsx
│  │  │  │  ├─ DefaultTooltipContent.tsx
│  │  │  │  ├─ Label.tsx
│  │  │  │  ├─ LabelList.tsx
│  │  │  │  ├─ Legend.tsx
│  │  │  │  ├─ ResponsiveContainer.tsx
│  │  │  │  ├─ Text.tsx
│  │  │  │  ├─ Tooltip.tsx
│  │  │  │  └─ TooltipBoundingBox.tsx
│  │  │  ├─ container
│  │  │  │  ├─ ClipPathProvider.tsx
│  │  │  │  ├─ Layer.tsx
│  │  │  │  ├─ RootSurface.tsx
│  │  │  │  └─ Surface.tsx
│  │  │  ├─ context
│  │  │  │  ├─ accessibilityContext.tsx
│  │  │  │  ├─ brushUpdateContext.tsx
│  │  │  │  ├─ CartesianGraphicalItemContext.tsx
│  │  │  │  ├─ chartDataContext.tsx
│  │  │  │  ├─ chartLayoutContext.tsx
│  │  │  │  ├─ legendPayloadContext.tsx
│  │  │  │  ├─ legendPortalContext.tsx
│  │  │  │  ├─ PanoramaContext.tsx
│  │  │  │  ├─ PolarGraphicalItemContext.tsx
│  │  │  │  ├─ tooltipContext.tsx
│  │  │  │  ├─ tooltipPortalContext.tsx
│  │  │  │  └─ useTooltipAxis.ts
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.ts
│  │  │  ├─ polar
│  │  │  │  ├─ defaultPolarAngleAxisProps.tsx
│  │  │  │  ├─ defaultPolarRadiusAxisProps.tsx
│  │  │  │  ├─ Pie.tsx
│  │  │  │  ├─ PolarAngleAxis.tsx
│  │  │  │  ├─ PolarGrid.tsx
│  │  │  │  ├─ PolarRadiusAxis.tsx
│  │  │  │  ├─ Radar.tsx
│  │  │  │  └─ RadialBar.tsx
│  │  │  ├─ shape
│  │  │  │  ├─ Cross.tsx
│  │  │  │  ├─ Curve.tsx
│  │  │  │  ├─ Dot.tsx
│  │  │  │  ├─ Polygon.tsx
│  │  │  │  ├─ Rectangle.tsx
│  │  │  │  ├─ Sector.tsx
│  │  │  │  ├─ Symbols.tsx
│  │  │  │  └─ Trapezoid.tsx
│  │  │  ├─ state
│  │  │  │  ├─ brushSlice.ts
│  │  │  │  ├─ cartesianAxisSlice.ts
│  │  │  │  ├─ chartDataSlice.ts
│  │  │  │  ├─ externalEventsMiddleware.ts
│  │  │  │  ├─ graphicalItemsSlice.ts
│  │  │  │  ├─ hooks.ts
│  │  │  │  ├─ keyboardEventsMiddleware.ts
│  │  │  │  ├─ layoutSlice.ts
│  │  │  │  ├─ legendSlice.ts
│  │  │  │  ├─ mouseEventsMiddleware.ts
│  │  │  │  ├─ optionsSlice.ts
│  │  │  │  ├─ polarAxisSlice.ts
│  │  │  │  ├─ polarOptionsSlice.ts
│  │  │  │  ├─ RechartsReduxContext.tsx
│  │  │  │  ├─ RechartsStoreProvider.tsx
│  │  │  │  ├─ reduxDevtoolsJsonStringifyReplacer.ts
│  │  │  │  ├─ referenceElementsSlice.ts
│  │  │  │  ├─ ReportBar.tsx
│  │  │  │  ├─ ReportChartProps.tsx
│  │  │  │  ├─ ReportMainChartProps.ts
│  │  │  │  ├─ ReportPolarOptions.tsx
│  │  │  │  ├─ rootPropsSlice.ts
│  │  │  │  ├─ selectors
│  │  │  │  │  ├─ areaSelectors.ts
│  │  │  │  │  ├─ axisSelectors.ts
│  │  │  │  │  ├─ barSelectors.ts
│  │  │  │  │  ├─ brushSelectors.ts
│  │  │  │  │  ├─ combiners
│  │  │  │  │  │  ├─ combineActiveLabel.ts
│  │  │  │  │  │  ├─ combineActiveTooltipIndex.ts
│  │  │  │  │  │  ├─ combineAxisRangeWithReverse.ts
│  │  │  │  │  │  ├─ combineCoordinateForDefaultIndex.ts
│  │  │  │  │  │  ├─ combineTooltipInteractionState.ts
│  │  │  │  │  │  └─ combineTooltipPayloadConfigurations.ts
│  │  │  │  │  ├─ containerSelectors.ts
│  │  │  │  │  ├─ dataSelectors.ts
│  │  │  │  │  ├─ funnelSelectors.ts
│  │  │  │  │  ├─ legendSelectors.ts
│  │  │  │  │  ├─ lineSelectors.ts
│  │  │  │  │  ├─ pickAxisId.ts
│  │  │  │  │  ├─ pickAxisType.ts
│  │  │  │  │  ├─ pieSelectors.ts
│  │  │  │  │  ├─ polarAxisSelectors.ts
│  │  │  │  │  ├─ polarGridSelectors.ts
│  │  │  │  │  ├─ polarScaleSelectors.ts
│  │  │  │  │  ├─ polarSelectors.ts
│  │  │  │  │  ├─ radarSelectors.ts
│  │  │  │  │  ├─ radialBarSelectors.ts
│  │  │  │  │  ├─ rootPropsSelectors.ts
│  │  │  │  │  ├─ scatterSelectors.ts
│  │  │  │  │  ├─ selectActivePropsFromChartPointer.ts
│  │  │  │  │  ├─ selectAllAxes.ts
│  │  │  │  │  ├─ selectChartOffset.ts
│  │  │  │  │  ├─ selectors.ts
│  │  │  │  │  ├─ selectTooltipEventType.ts
│  │  │  │  │  ├─ selectTooltipPayloadSearcher.ts
│  │  │  │  │  ├─ selectTooltipSettings.ts
│  │  │  │  │  ├─ selectTooltipState.ts
│  │  │  │  │  ├─ tooltipSelectors.ts
│  │  │  │  │  └─ touchSelectors.ts
│  │  │  │  ├─ SetGraphicalItem.ts
│  │  │  │  ├─ SetLegendPayload.ts
│  │  │  │  ├─ SetTooltipEntrySettings.tsx
│  │  │  │  ├─ store.ts
│  │  │  │  ├─ tooltipSlice.ts
│  │  │  │  └─ touchEventsMiddleware.ts
│  │  │  ├─ synchronisation
│  │  │  │  ├─ syncSelectors.ts
│  │  │  │  ├─ types.ts
│  │  │  │  └─ useChartSynchronisation.tsx
│  │  │  └─ util
│  │  │     ├─ ActiveShapeUtils.tsx
│  │  │     ├─ BarUtils.tsx
│  │  │     ├─ CartesianUtils.ts
│  │  │     ├─ ChartUtils.ts
│  │  │     ├─ Constants.ts
│  │  │     ├─ CssPrefixUtils.ts
│  │  │     ├─ cursor
│  │  │     │  ├─ getCursorPoints.ts
│  │  │     │  ├─ getCursorRectangle.ts
│  │  │     │  └─ getRadialCursorPoints.ts
│  │  │     ├─ DataUtils.ts
│  │  │     ├─ DOMUtils.ts
│  │  │     ├─ Events.ts
│  │  │     ├─ FunnelUtils.tsx
│  │  │     ├─ getChartPointer.ts
│  │  │     ├─ getEveryNthWithCondition.ts
│  │  │     ├─ Global.ts
│  │  │     ├─ IfOverflow.ts
│  │  │     ├─ isDomainSpecifiedByUser.ts
│  │  │     ├─ isWellBehavedNumber.ts
│  │  │     ├─ LogUtils.ts
│  │  │     ├─ payload
│  │  │     │  └─ getUniqPayload.ts
│  │  │     ├─ PolarUtils.ts
│  │  │     ├─ RadialBarUtils.tsx
│  │  │     ├─ ReactUtils.ts
│  │  │     ├─ ReduceCSSCalc.ts
│  │  │     ├─ resolveDefaultProps.tsx
│  │  │     ├─ scale
│  │  │     │  ├─ getNiceTickValues.ts
│  │  │     │  ├─ index.ts
│  │  │     │  └─ util
│  │  │     │     ├─ arithmetic.ts
│  │  │     │     └─ utils.ts
│  │  │     ├─ ScatterUtils.tsx
│  │  │     ├─ ShallowEqual.ts
│  │  │     ├─ TickUtils.ts
│  │  │     ├─ tooltip
│  │  │     │  └─ translate.ts
│  │  │     ├─ types.ts
│  │  │     ├─ useAnimationId.tsx
│  │  │     ├─ useElementOffset.ts
│  │  │     ├─ useReportScale.ts
│  │  │     └─ YAxisUtils.tsx
│  │  ├─ storybook
│  │  │  ├─ ChartSizeDimensions.tsx
│  │  │  ├─ global.css
│  │  │  ├─ main.ts
│  │  │  ├─ manager.ts
│  │  │  ├─ preview.ts
│  │  │  ├─ README.md
│  │  │  ├─ RechartsTheme.ts
│  │  │  ├─ stories
│  │  │  │  ├─ API
│  │  │  │  │  ├─ Accessibility.mdx
│  │  │  │  │  ├─ cartesian
│  │  │  │  │  │  ├─ Area.mdx
│  │  │  │  │  │  ├─ Area.stories.tsx
│  │  │  │  │  │  ├─ Bar.mdx
│  │  │  │  │  │  ├─ Bar.stories.tsx
│  │  │  │  │  │  ├─ Brush.mdx
│  │  │  │  │  │  ├─ Brush.stories.tsx
│  │  │  │  │  │  ├─ CartesianAxis.mdx
│  │  │  │  │  │  ├─ CartesianAxis.stories.tsx
│  │  │  │  │  │  ├─ CartesianGrid.mdx
│  │  │  │  │  │  ├─ CartesianGrid.stories.tsx
│  │  │  │  │  │  ├─ ErrorBar.mdx
│  │  │  │  │  │  ├─ ErrorBar.stories.tsx
│  │  │  │  │  │  ├─ Funnel.mdx
│  │  │  │  │  │  ├─ Funnel.stories.tsx
│  │  │  │  │  │  ├─ Line.mdx
│  │  │  │  │  │  ├─ Line.stories.tsx
│  │  │  │  │  │  ├─ ReferenceArea.mdx
│  │  │  │  │  │  ├─ ReferenceArea.stories.tsx
│  │  │  │  │  │  ├─ ReferenceDot.mdx
│  │  │  │  │  │  ├─ ReferenceDot.stories.tsx
│  │  │  │  │  │  ├─ ReferenceLine.mdx
│  │  │  │  │  │  ├─ ReferenceLine.stories.tsx
│  │  │  │  │  │  ├─ Scatter.mdx
│  │  │  │  │  │  ├─ Scatter.stories.tsx
│  │  │  │  │  │  ├─ XAxis.mdx
│  │  │  │  │  │  ├─ XAxis.stories.tsx
│  │  │  │  │  │  ├─ YAxis.mdx
│  │  │  │  │  │  ├─ YAxis.stories.tsx
│  │  │  │  │  │  ├─ ZAxis.mdx
│  │  │  │  │  │  └─ ZAxis.stories.tsx
│  │  │  │  │  ├─ chart
│  │  │  │  │  │  ├─ AreaChart.mdx
│  │  │  │  │  │  ├─ AreaChart.stories.tsx
│  │  │  │  │  │  ├─ BarChart.mdx
│  │  │  │  │  │  ├─ BarChart.stories.tsx
│  │  │  │  │  │  ├─ ComposedChart.mdx
│  │  │  │  │  │  ├─ ComposedChart.stories.tsx
│  │  │  │  │  │  ├─ FunnelChart.mdx
│  │  │  │  │  │  ├─ FunnelChart.stories.tsx
│  │  │  │  │  │  ├─ LineChart.mdx
│  │  │  │  │  │  ├─ LineChart.stories.tsx
│  │  │  │  │  │  ├─ PieChart.mdx
│  │  │  │  │  │  ├─ PieChart.stories.tsx
│  │  │  │  │  │  ├─ RadarChart.mdx
│  │  │  │  │  │  ├─ RadarChart.stories.tsx
│  │  │  │  │  │  ├─ RadialBarChart.mdx
│  │  │  │  │  │  ├─ RadialBarChart.stories.tsx
│  │  │  │  │  │  ├─ Sankey.mdx
│  │  │  │  │  │  ├─ Sankey.stories.tsx
│  │  │  │  │  │  ├─ ScatterChart.mdx
│  │  │  │  │  │  ├─ ScatterChart.stories.tsx
│  │  │  │  │  │  ├─ SunburstChart.mdx
│  │  │  │  │  │  ├─ SunburstChart.stories.tsx
│  │  │  │  │  │  ├─ Treemap.mdx
│  │  │  │  │  │  └─ Treemap.stories.tsx
│  │  │  │  │  ├─ component
│  │  │  │  │  │  ├─ Cell.mdx
│  │  │  │  │  │  ├─ Cell.stories.tsx
│  │  │  │  │  │  ├─ Label.mdx
│  │  │  │  │  │  ├─ Label.stories.tsx
│  │  │  │  │  │  ├─ LabelList.mdx
│  │  │  │  │  │  ├─ LabelList.stories.tsx
│  │  │  │  │  │  ├─ Legend.mdx
│  │  │  │  │  │  ├─ Legend.stories.tsx
│  │  │  │  │  │  ├─ Text.mdx
│  │  │  │  │  │  ├─ Text.stories.tsx
│  │  │  │  │  │  ├─ Tooltip.mdx
│  │  │  │  │  │  └─ Tooltip.stories.tsx
│  │  │  │  │  ├─ hooks
│  │  │  │  │  │  ├─ dimensions.mdx
│  │  │  │  │  │  └─ dimensions.stories.tsx
│  │  │  │  │  ├─ polar
│  │  │  │  │  │  ├─ Pie.mdx
│  │  │  │  │  │  ├─ Pie.stories.tsx
│  │  │  │  │  │  ├─ PolarAngleAxis.mdx
│  │  │  │  │  │  ├─ PolarAngleAxis.stories.tsx
│  │  │  │  │  │  ├─ PolarGrid.mdx
│  │  │  │  │  │  ├─ PolarGrid.stories.tsx
│  │  │  │  │  │  ├─ PolarRadiusAxis.mdx
│  │  │  │  │  │  ├─ PolarRadiusAxis.stories.tsx
│  │  │  │  │  │  ├─ Radar.mdx
│  │  │  │  │  │  ├─ Radar.stories.tsx
│  │  │  │  │  │  ├─ RadialBar.mdx
│  │  │  │  │  │  └─ RadialBar.stories.tsx
│  │  │  │  │  ├─ props
│  │  │  │  │  │  ├─ ActiveShapeProps.ts
│  │  │  │  │  │  ├─ AnimationProps.ts
│  │  │  │  │  │  ├─ AreaChartProps.ts
│  │  │  │  │  │  ├─ BarChartProps.ts
│  │  │  │  │  │  ├─ CartesianChartProps.ts
│  │  │  │  │  │  ├─ CartesianComponentShared.ts
│  │  │  │  │  │  ├─ ChartProps.ts
│  │  │  │  │  │  ├─ DotProps.ts
│  │  │  │  │  │  ├─ EventHandlers.ts
│  │  │  │  │  │  ├─ LabelListProps.ts
│  │  │  │  │  │  ├─ Legend.ts
│  │  │  │  │  │  ├─ PolarChartProps.ts
│  │  │  │  │  │  ├─ PolarComponentShared.ts
│  │  │  │  │  │  ├─ RadarChartProps.ts
│  │  │  │  │  │  ├─ RadialBarChartProps.ts
│  │  │  │  │  │  ├─ RadialBarProps.ts
│  │  │  │  │  │  ├─ RectangleProps.ts
│  │  │  │  │  │  ├─ ReferenceComponentShared.ts
│  │  │  │  │  │  ├─ SectorProps.ts
│  │  │  │  │  │  ├─ SharedAxisProps.ts
│  │  │  │  │  │  ├─ Styles.ts
│  │  │  │  │  │  ├─ TextProps.ts
│  │  │  │  │  │  ├─ Tooltip.ts
│  │  │  │  │  │  ├─ TooltipProps.tsx
│  │  │  │  │  │  ├─ utils.ts
│  │  │  │  │  │  ├─ XAxisProps.ts
│  │  │  │  │  │  └─ YAxisProps.ts
│  │  │  │  │  ├─ ResponsiveContainer.mdx
│  │  │  │  │  ├─ ResponsiveContainer.stories.tsx
│  │  │  │  │  └─ shapes
│  │  │  │  │     ├─ Cross.mdx
│  │  │  │  │     ├─ Cross.stories.tsx
│  │  │  │  │     ├─ Curve.mdx
│  │  │  │  │     ├─ Curve.stories.tsx
│  │  │  │  │     ├─ Dot.mdx
│  │  │  │  │     ├─ Dot.stories.tsx
│  │  │  │  │     ├─ Polygon.mdx
│  │  │  │  │     ├─ Polygon.stories.tsx
│  │  │  │  │     ├─ Rectangle.mdx
│  │  │  │  │     ├─ Rectangle.stories.tsx
│  │  │  │  │     ├─ Sector.mdx
│  │  │  │  │     └─ Sector.stories.tsx
│  │  │  │  ├─ Blog.mdx
│  │  │  │  ├─ Customise.mdx
│  │  │  │  ├─ data
│  │  │  │  │  ├─ BoxPlot.ts
│  │  │  │  │  ├─ Coordinate.ts
│  │  │  │  │  ├─ DataProps.ts
│  │  │  │  │  ├─ Error.ts
│  │  │  │  │  ├─ Impression.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ NodeAndLink.ts
│  │  │  │  │  ├─ PackageDownloads.ts
│  │  │  │  │  ├─ Page.ts
│  │  │  │  │  ├─ Size.ts
│  │  │  │  │  ├─ solarSystem.ts
│  │  │  │  │  ├─ spurriousCorrelations.ts
│  │  │  │  │  ├─ StockPrice.ts
│  │  │  │  │  ├─ Tick.ts
│  │  │  │  │  └─ Time.ts
│  │  │  │  ├─ Examples
│  │  │  │  │  ├─ AreaChart.stories.tsx
│  │  │  │  │  ├─ BarChart
│  │  │  │  │  │  └─ BarChart.stories.tsx
│  │  │  │  │  ├─ cartesian
│  │  │  │  │  │  ├─ Area
│  │  │  │  │  │  │  ├─ AreaWithCustomDot.stories.tsx
│  │  │  │  │  │  │  ├─ AreaWithCustomLabel.stories.tsx
│  │  │  │  │  │  │  └─ AreaWithFillPattern.stories.tsx
│  │  │  │  │  │  ├─ Bar
│  │  │  │  │  │  │  ├─ CustomizedEvent.stories.tsx
│  │  │  │  │  │  │  ├─ CustomizedShape.stories.tsx
│  │  │  │  │  │  │  ├─ FillPatternOrGradient.stories.tsx
│  │  │  │  │  │  │  ├─ StackedAndUnstacked.stories.tsx
│  │  │  │  │  │  │  └─ WithBrushAndOnDragEnd.stories.tsx
│  │  │  │  │  │  ├─ Brush
│  │  │  │  │  │  │  ├─ Brush.stories.tsx
│  │  │  │  │  │  │  └─ BrushInSurface.stories.tsx
│  │  │  │  │  │  ├─ CartesianAxis
│  │  │  │  │  │  │  ├─ MultipleAxes.stories.tsx
│  │  │  │  │  │  │  └─ TickPositioning.stories.tsx
│  │  │  │  │  │  ├─ Line
│  │  │  │  │  │  │  ├─ LineWithCustomDot.stories.tsx
│  │  │  │  │  │  │  └─ LineWithCustomLabel.stories.tsx
│  │  │  │  │  │  ├─ ReferenceArea
│  │  │  │  │  │  │  └─ ReferenceAreaIfOverflow.stories.tsx
│  │  │  │  │  │  ├─ ReferenceDot
│  │  │  │  │  │  │  └─ ReferenceDotIfOverflow.stories.tsx
│  │  │  │  │  │  ├─ ReferenceLine
│  │  │  │  │  │  │  ├─ ReferenceLineIfOverflow.stories.tsx
│  │  │  │  │  │  │  └─ ReferenceLineSegment.stories.tsx
│  │  │  │  │  │  ├─ XAxis
│  │  │  │  │  │  │  ├─ SolarSystem.stories.tsx
│  │  │  │  │  │  │  ├─ XAxisWithCalculatedPadding.stories.tsx
│  │  │  │  │  │  │  ├─ XAxisWithCustomTicks.stories.tsx
│  │  │  │  │  │  │  ├─ XAxisWithDifferentDataTypes.stories.tsx
│  │  │  │  │  │  │  ├─ XAxisWithMultipleAxes.stories.tsx
│  │  │  │  │  │  │  └─ XAxisWithTickFormatter.stories.tsx
│  │  │  │  │  │  └─ YAxis
│  │  │  │  │  │     ├─ XAxisIncludeHidden.stories.tsx
│  │  │  │  │  │     └─ YAxisMultipleAxes.stories.tsx
│  │  │  │  │  ├─ ChartLayout.stories.tsx
│  │  │  │  │  ├─ ComposedChart
│  │  │  │  │  │  ├─ AccessibilityLayer.stories.tsx
│  │  │  │  │  │  ├─ BoxPlot.stories.tsx
│  │  │  │  │  │  └─ StockPrice.stories.tsx
│  │  │  │  │  ├─ DataKey
│  │  │  │  │  │  └─ ToggleBetweenDataKeys.stories.tsx
│  │  │  │  │  ├─ DualLineChart.stories.tsx
│  │  │  │  │  ├─ LineChart.stories.tsx
│  │  │  │  │  ├─ Pie
│  │  │  │  │  │  ├─ CustomActiveShapePieChart.stories.tsx
│  │  │  │  │  │  ├─ DraggablePie.stories.tsx
│  │  │  │  │  │  ├─ PieWithCells.stories.tsx
│  │  │  │  │  │  ├─ PieWithLegend.stories.tsx
│  │  │  │  │  │  ├─ PieWithNeedle.stories.tsx
│  │  │  │  │  │  ├─ PieWithStep.stories.tsx
│  │  │  │  │  │  └─ PieWithTooltip.stories.tsx
│  │  │  │  │  ├─ RadarChart.stories.tsx
│  │  │  │  │  ├─ RadialBarChart.stories.tsx
│  │  │  │  │  ├─ RadialBarChartMultipleAxes.stories.tsx
│  │  │  │  │  ├─ ResponsiveContainer
│  │  │  │  │  │  ├─ MultiChartFlexbox.stories.tsx
│  │  │  │  │  │  └─ style.css
│  │  │  │  │  ├─ ScatterChart.stories.tsx
│  │  │  │  │  ├─ ScatterChartWithTwoErrorBars.stories.tsx
│  │  │  │  │  ├─ Synchronised.stories.tsx
│  │  │  │  │  ├─ TimeSeries.stories.tsx
│  │  │  │  │  └─ Tooltip.stories.tsx
│  │  │  │  ├─ GettingStarted.mdx
│  │  │  │  ├─ Installation.mdx
│  │  │  │  └─ Welcome.mdx
│  │  │  ├─ storybook-addon-recharts
│  │  │  │  ├─ ArrayInspector.tsx
│  │  │  │  ├─ CartesianChartInspector.tsx
│  │  │  │  ├─ constants.ts
│  │  │  │  ├─ ObjectInspector.tsx
│  │  │  │  ├─ PolarChartInspector.tsx
│  │  │  │  ├─ preview.tsx
│  │  │  │  ├─ RechartsHookInspector.tsx
│  │  │  │  ├─ register.tsx
│  │  │  │  ├─ ScaleInspector.tsx
│  │  │  │  └─ withRechartsHookInspector.tsx
│  │  │  ├─ StorybookArgs.ts
│  │  │  └─ tsconfig.json
│  │  ├─ stryker.config.mjs
│  │  ├─ test
│  │  │  ├─ animation
│  │  │  │  ├─ Animate.spec.tsx
│  │  │  │  ├─ AnimationManager.spec.ts
│  │  │  │  ├─ configUpdate.spec.ts
│  │  │  │  ├─ easing.spec.ts
│  │  │  │  ├─ mockTimeoutController.ts
│  │  │  │  ├─ timeoutController.spec.ts
│  │  │  │  └─ util.spec.ts
│  │  │  ├─ cartesian
│  │  │  │  ├─ Area.spec.tsx
│  │  │  │  ├─ Bar.spec.tsx
│  │  │  │  ├─ Brush.spec.tsx
│  │  │  │  ├─ CartesianAxis.spec.tsx
│  │  │  │  ├─ CartesianGrid.spec.tsx
│  │  │  │  ├─ ErrorBar.spec.tsx
│  │  │  │  ├─ Funnel.spec.tsx
│  │  │  │  ├─ getEquidistantTicks.spec.ts
│  │  │  │  ├─ getTicks.spec.ts
│  │  │  │  ├─ Line.spec.tsx
│  │  │  │  ├─ ReferenceArea.spec.tsx
│  │  │  │  ├─ ReferenceDot.spec.tsx
│  │  │  │  ├─ ReferenceLine
│  │  │  │  │  ├─ getEndPoints.spec.tsx
│  │  │  │  │  └─ ReferenceLine.spec.tsx
│  │  │  │  ├─ Scatter.spec.tsx
│  │  │  │  ├─ snapshots
│  │  │  │  │  ├─ brush-traveller1.svg
│  │  │  │  │  └─ brush-traveller2.svg
│  │  │  │  ├─ XAxis.spec.tsx
│  │  │  │  ├─ YAxis
│  │  │  │  │  ├─ YAxis.label.spec.tsx
│  │  │  │  │  └─ YAxis.spec.tsx
│  │  │  │  ├─ ZAxis.spec.tsx
│  │  │  │  └─ __snapshots__
│  │  │  │     └─ ReferenceArea.spec.tsx.snap
│  │  │  ├─ chart
│  │  │  │  ├─ AccessibilityLayer.spec.tsx
│  │  │  │  ├─ AccessibilityScans.spec.tsx
│  │  │  │  ├─ AreaChart.spec.tsx
│  │  │  │  ├─ BarChart.spec.tsx
│  │  │  │  ├─ CategoricalChart.spec.tsx
│  │  │  │  ├─ chartEvents.spec.tsx
│  │  │  │  ├─ ComposedChart.spec.tsx
│  │  │  │  ├─ FunnelChart.spec.tsx
│  │  │  │  ├─ LineChart.spec.tsx
│  │  │  │  ├─ PieChart.spec.tsx
│  │  │  │  ├─ RadarChart.spec.tsx
│  │  │  │  ├─ RadialBarChart.spec.tsx
│  │  │  │  ├─ RechartsWrapper.spec.tsx
│  │  │  │  ├─ Sankey.spec.tsx
│  │  │  │  ├─ ScatterChart.spec.tsx
│  │  │  │  ├─ SunburstChart.spec.tsx
│  │  │  │  └─ Treemap.spec.tsx
│  │  │  ├─ component
│  │  │  │  ├─ Cell.spec.tsx
│  │  │  │  ├─ Cursor.spec.tsx
│  │  │  │  ├─ Customized.spec.tsx
│  │  │  │  ├─ DefaultTooltipContent.spec.tsx
│  │  │  │  ├─ Label.spec.tsx
│  │  │  │  ├─ LabelList.spec.tsx
│  │  │  │  ├─ Legend.spec.tsx
│  │  │  │  ├─ ResponsiveContainer.spec.tsx
│  │  │  │  ├─ Text.spec.tsx
│  │  │  │  ├─ Tooltip
│  │  │  │  │  ├─ ActiveDot.spec.tsx
│  │  │  │  │  ├─ defaultIndex.spec.tsx
│  │  │  │  │  ├─ itemSorter.spec.tsx
│  │  │  │  │  ├─ Tooltip.formatter.spec.tsx
│  │  │  │  │  ├─ Tooltip.payload.spec.tsx
│  │  │  │  │  ├─ Tooltip.state.spec.tsx
│  │  │  │  │  ├─ Tooltip.sync.spec.tsx
│  │  │  │  │  ├─ Tooltip.visibility.spec.tsx
│  │  │  │  │  ├─ tooltipEventType.spec.tsx
│  │  │  │  │  ├─ tooltipMouseHoverSelectors.ts
│  │  │  │  │  └─ tooltipTestHelpers.tsx
│  │  │  │  └─ TooltipBoundingBox.spec.tsx
│  │  │  ├─ container
│  │  │  │  ├─ chartDimensions.spec.tsx
│  │  │  │  └─ ClipPath.spec.tsx
│  │  │  ├─ context
│  │  │  │  └─ chartLayoutContext.spec.tsx
│  │  │  ├─ helper
│  │  │  │  ├─ animation-frame-helper.ts
│  │  │  │  ├─ assertNotNull.ts
│  │  │  │  ├─ assertType.ts
│  │  │  │  ├─ clickOn.ts
│  │  │  │  ├─ createSelectorTestCase.tsx
│  │  │  │  ├─ expectAxisTicks.ts
│  │  │  │  ├─ expectBars.ts
│  │  │  │  ├─ expectLabel.ts
│  │  │  │  ├─ expectLine.ts
│  │  │  │  ├─ expectRadarPolygons.ts
│  │  │  │  ├─ expectRadialBars.ts
│  │  │  │  ├─ expectScale.ts
│  │  │  │  ├─ expectScatterPoints.ts
│  │  │  │  ├─ focus.ts
│  │  │  │  ├─ generateMockData.ts
│  │  │  │  ├─ mockAxes.ts
│  │  │  │  ├─ mockGetBoundingClientRect.ts
│  │  │  │  ├─ mockHTMLElementProperty.ts
│  │  │  │  ├─ mockTouchingElement.ts
│  │  │  │  ├─ offsetHelpers.ts
│  │  │  │  ├─ parameterizedTestCases.tsx
│  │  │  │  ├─ produceState.ts
│  │  │  │  ├─ random.spec.ts
│  │  │  │  ├─ random.ts
│  │  │  │  ├─ selectorTestHelpers.tsx
│  │  │  │  ├─ toBeRechartsScale.ts
│  │  │  │  ├─ trim.spec.ts
│  │  │  │  └─ trim.ts
│  │  │  ├─ polar
│  │  │  │  ├─ Pie.spec.tsx
│  │  │  │  ├─ PolarAngleAxis.spec.tsx
│  │  │  │  ├─ PolarGrid.spec.tsx
│  │  │  │  ├─ PolarRadiusAxis.spec.tsx
│  │  │  │  ├─ Radar.spec.tsx
│  │  │  │  └─ RadialBar.spec.tsx
│  │  │  ├─ shape
│  │  │  │  ├─ ActiveShape.spec.tsx
│  │  │  │  ├─ Cross.spec.tsx
│  │  │  │  ├─ Curve.spec.tsx
│  │  │  │  ├─ Dot.spec.tsx
│  │  │  │  ├─ Polygon.spec.tsx
│  │  │  │  ├─ Rectangle.spec.tsx
│  │  │  │  ├─ Sector.spec.tsx
│  │  │  │  ├─ Symbols.spec.tsx
│  │  │  │  ├─ Trapezoid.spec.tsx
│  │  │  │  └─ __snapshots__
│  │  │  │     ├─ Cross.spec.tsx.snap
│  │  │  │     ├─ Curve.spec.tsx.snap
│  │  │  │     ├─ Polygon.spec.tsx.snap
│  │  │  │     ├─ Rectangle.spec.tsx.snap
│  │  │  │     ├─ Sector.spec.tsx.snap
│  │  │  │     └─ Trapezoid.spec.tsx.snap
│  │  │  ├─ state
│  │  │  │  ├─ chartDataSlice.spec.ts
│  │  │  │  ├─ graphicalItemsSlice.spec.ts
│  │  │  │  ├─ hooks.spec.tsx
│  │  │  │  ├─ legendSlice.spec.ts
│  │  │  │  ├─ optionsSlice.spec.ts
│  │  │  │  ├─ redux-nesting.spec.tsx
│  │  │  │  ├─ reduxDevtoolsJsonStringifyReplacer.spec.ts
│  │  │  │  ├─ referenceElementsSlice.spec.ts
│  │  │  │  └─ selectors
│  │  │  │     ├─ areaSelectors.spec.tsx
│  │  │  │     ├─ axisSelectors.spec.tsx
│  │  │  │     ├─ brushSelectors.spec.tsx
│  │  │  │     ├─ containerSelectors.spec.tsx
│  │  │  │     ├─ dataSelectors.spec.tsx
│  │  │  │     ├─ legendSelectors.spec.tsx
│  │  │  │     ├─ lineSelectors.spec.tsx
│  │  │  │     ├─ pieSelectors.spec.tsx
│  │  │  │     ├─ radarSelectors.spec.tsx
│  │  │  │     ├─ rootPropsSelectors.spec.tsx
│  │  │  │     ├─ scatterSelectors.spec.tsx
│  │  │  │     ├─ selectActiveTooltipIndex.spec.tsx
│  │  │  │     ├─ selectAllAxes.spec.tsx
│  │  │  │     ├─ selectChartOffset.spec.tsx
│  │  │  │     ├─ selectIsTooltipActive.spec.tsx
│  │  │  │     └─ selectors.spec.tsx
│  │  │  ├─ synchronisation
│  │  │  │  ├─ eventCenter.spec.ts
│  │  │  │  └─ useChartSynchronisation.spec.tsx
│  │  │  ├─ tsconfig.json
│  │  │  ├─ util
│  │  │  │  ├─ BarUtils.spec.tsx
│  │  │  │  ├─ CartesianUtils
│  │  │  │  │  ├─ CartesianUtils.spec.ts
│  │  │  │  │  └─ rectWithPoints.spec.ts
│  │  │  │  ├─ ChartUtils
│  │  │  │  │  ├─ appendOffsetOfLegend.spec.tsx
│  │  │  │  │  ├─ checkDomainOfScale.spec.ts
│  │  │  │  │  ├─ getCateCoordinateOfLine.spec.ts
│  │  │  │  │  ├─ getStackedData.spec.ts
│  │  │  │  │  └─ truncateByDomain.spec.ts
│  │  │  │  ├─ ChartUtils.spec.tsx
│  │  │  │  ├─ context.tsx
│  │  │  │  ├─ cursor
│  │  │  │  │  ├─ getCursorPoints.spec.ts
│  │  │  │  │  ├─ getCursorRectangle.spec.ts
│  │  │  │  │  └─ getRadialCursorPoints.spec.ts
│  │  │  │  ├─ DataUtils.spec.ts
│  │  │  │  ├─ DomUtils.spec.tsx
│  │  │  │  ├─ errorValue.spec.ts
│  │  │  │  ├─ FunnelUtils.spec.tsx
│  │  │  │  ├─ getChartPointer.spec.ts
│  │  │  │  ├─ Global.spec.ts
│  │  │  │  ├─ isDomainSpecifiedByUser.spec.ts
│  │  │  │  ├─ isWellBehavedNumber.spec.ts
│  │  │  │  ├─ LogUtils.spec.ts
│  │  │  │  ├─ payload
│  │  │  │  │  └─ getUniqPayload.spec.ts
│  │  │  │  ├─ PolarUtils.spec.ts
│  │  │  │  ├─ ReactUtils.spec.tsx
│  │  │  │  ├─ ReduceCssCalcPrototype.spec.ts
│  │  │  │  ├─ resolveDefaultProps.spec-d.ts
│  │  │  │  ├─ resolveDefaultProps.spec.tsx
│  │  │  │  ├─ scale
│  │  │  │  │  ├─ arithmetic.spec.ts
│  │  │  │  │  ├─ getNiceTickValues.spec.ts
│  │  │  │  │  ├─ getTickValuesFixedDomain.test.ts
│  │  │  │  │  └─ utils.spec.ts
│  │  │  │  ├─ ShallowEqual.spec.ts
│  │  │  │  ├─ TickUtils.spec.ts
│  │  │  │  ├─ tooltip
│  │  │  │  │  └─ translate.spec.ts
│  │  │  │  └─ useAnimationId.spec.tsx
│  │  │  ├─ vitest.global-setup.ts
│  │  │  ├─ vitest.setup.ts
│  │  │  └─ _data.ts
│  │  ├─ test-umd.html
│  │  ├─ tsconfig.json
│  │  ├─ types.d.ts
│  │  ├─ vitest.config.mts
│  │  └─ webpack.config.js
│  ├─ src
│  │  ├─ App.js
│  │  ├─ components
│  │  │  ├─ ActualBudget.js
│  │  │  ├─ Features.js
│  │  │  ├─ Footer.js
│  │  │  ├─ Hero.js
│  │  │  ├─ Home.js
│  │  │  ├─ Login.js
│  │  │  ├─ Navbar.js
│  │  │  ├─ SpendingTracker.js
│  │  │  └─ spendingTrackerComponents
│  │  │     ├─ AddExpenseForm.js
│  │  │     ├─ CategorySelect.js
│  │  │     ├─ ListOfExpenses.js
│  │  │     ├─ SpendingGraph.js
│  │  │     └─ useChartData.js
│  │  ├─ constants
│  │  │  └─ CategoryConfig.js
│  │  ├─ index.css
│  │  └─ index.js
│  └─ tailwind.config.js
└─ README.md

```