import { apiSlice } from "../services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        retrieveUser: builder.query({
            query: () => '/users/me/'
        }),
        googleAuthentication: builder.mutation({
            query: () => ({
                url: '/o/google-oauth2/?state=STATE&code=CODE',
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        })
    })
})

export const { useRetrieveUserQuery } = authApiSlice
