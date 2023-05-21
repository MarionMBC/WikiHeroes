import {authReducer} from "../../auth/authReducer";
import {types} from "../../types/types";

describe('AuthReducer tests', function () {
    test('Should return default state', function() {
      const state = authReducer({logged: false}, {});
      expect( state ).toEqual({logged:false})
    });

    test('Should auth the user', function() {
        const action = {
            type: types.login,
            payload: {
                name: 'Melchisedec'
            }
        }
        const state = authReducer({logged: false}, action)
        expect(state).toEqual({
            logged: true,
            name: 'Melchisedec'
        })
    });

    test('Sholud delete the current user and switch logged to false', function() {
        const action = {
            type: types.logout
        }
        const state = authReducer({logged: true, name: 'Melchisedec'}, action);
        expect( state ).toEqual({
            logged: false
        })
    });
});