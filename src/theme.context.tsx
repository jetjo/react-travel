
import { ConfigProvider } from "antd";

const theme = {
    token: {
        colorPrimary: '#2da0bf'
    }
};

const AppThemeProvider = ( props ) =>
{
    return (
        <ConfigProvider
            theme={ theme }
        >
            <div
                style={ {
                    '--color-primary': theme.token.colorPrimary,
                    '--color-primary--hover': '#ff9800'
                } as any }
            >
                { props.children }
            </div>
        </ConfigProvider>
    );
};

export default AppThemeProvider;
