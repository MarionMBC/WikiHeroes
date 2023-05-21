import {AppRouter} from "../../routers/AppRouter";
import {mount} from "enzyme";
import {AuthContext} from "../../context/authContext";
import {mountToJson} from "enzyme-to-json";
import {MemoryRouter} from "react-router-dom";
import {DarkThemeProvider} from "../../context/DarkThemeContext";


describe('App Router tests', () => {
    const contextValue = {
        user: {
            logged: 'false'
        }
    }
    test('Should show login if user is not authenticated', () => {
        const wrapper = mount(
            <DarkThemeProvider>
                <AuthContext.Provider value={contextValue}>
                    <MemoryRouter>
                        <AppRouter/>
                    </MemoryRouter>
                </AuthContext.Provider>
            </DarkThemeProvider>
        )

        expect(mountToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Sign In')

    })
});