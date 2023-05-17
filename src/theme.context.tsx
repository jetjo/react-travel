
import { ConfigProvider } from "antd";

const theme = {
    token: {
        colorPrimary: '#2da0bf'
    }
}

const AppThemeProvider = ( props ) =>
{
    return (
        <ConfigProvider theme={theme}>
            { props.children }
        </ConfigProvider>
    );
};

export default AppThemeProvider;
