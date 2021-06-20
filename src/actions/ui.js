import { types } from '../types/types'

export const setError = ( err ) => ({

        type: types.uiSetError,
        payload: err

});

export const removeError = (  ) => ({

        type: types.uiRemoveError

});

export const uiStarLoading= (  ) => ({
        type: types.uiStarLoading
})

export const uiFinishLoading= (  ) => ({
        type: types.uiFinishLoading

})