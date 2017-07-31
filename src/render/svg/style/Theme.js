const DefaultShape = {
    strokeColor: '#333',
    strokeWidth: 1,
    fillColor: '#fff',
    textColor: '#111',
    fontFamily: 'monospace',
    fontSize: 13,
    symbolHeight: 10,
    symbolWidth: 7.8,
    horizontalPadding: 10,
    verticalPadding: 10
};

export const Themes = {
    DEFAULT: {
        ConnectionArrow: {
            arrow: {
                size: {
                    x: 8,
                    y: 6
                },
                fillColor: '#222'
            },
            line: {
                strokeColor: '#333',
                strokeWidth: 1
            },
            lineTurnOffset: 20
        },

        Shape: {
            ...DefaultShape
        },

        Rectangle: {
            ...DefaultShape,
            fillColor: '#b39ddb',
            roundBorder: 3
        },

        VerticalEdgedRectangle: {
            ...DefaultShape,
            fillColor: '#a5d6a7',
            edgeOffset: 10
        },

        Circle: {
            ...DefaultShape,
            fillColor: '#fff59d'
        },

        Rhombus: {
            ...DefaultShape,
            fillColor: '#90CAF9'
        }
    }
};


export const getTheme = (currentTheme) => {
    switch (currentTheme) {
        default:
            return Themes.DEFAULT;
    }
};
