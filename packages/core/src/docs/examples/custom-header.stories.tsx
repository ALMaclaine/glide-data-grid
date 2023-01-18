import React from "react";
import { DataEditor } from "../../data-editor/data-editor";
import { BeautifulWrapper, Description, useMockDataGenerator, defaultProps } from "../../data-editor/stories/utils";
import type { DrawHeaderCallback } from "../../data-grid/data-grid-types";
import { SimpleThemeWrapper } from "../../stories/story-utils";

export default {
    title: "Glide-Data-Grid/DataEditor Demos",

    decorators: [
        (Story: React.ComponentType) => (
            <SimpleThemeWrapper>
                <BeautifulWrapper
                    title="Custom Header"
                    description={<Description>Make it as fancy as you like.</Description>}>
                    <Story />
                </BeautifulWrapper>
            </SimpleThemeWrapper>
        ),
    ],
};

export const CustomHeader: React.VFC = () => {
    const { cols, getCellContent, onColumnResize } = useMockDataGenerator(1000, true, true);

    const drawHeader: DrawHeaderCallback = React.useCallback(args => {
        const { ctx, rect } = args;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        const width = rect.x + rect.width;
        console.log(rect.height / 2);
        ctx.beginPath();
        ctx.moveTo(width - 10, rect.height / 2 + 36);
        ctx.lineTo(width - 20, rect.height / 2 + 36);
        ctx.lineTo(width - 15, rect.height / 2 + 45);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(width - 10, rect.height / 2 + 32);
        ctx.lineTo(width - 20, rect.height / 2 + 32);
        ctx.lineTo(width - 15, rect.height / 2 + 22);
        ctx.fill();
        return false;
    }, []);

    return (
        <DataEditor
            {...defaultProps}
            getCellContent={getCellContent}
            onColumnResize={onColumnResize}
            columns={cols}
            drawHeader={drawHeader}
            rows={3000}
            rowMarkers="both"
        />
    );
};
