import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../app/api/apiSlice';

const fuelQuotesAdapter = createEntityAdapter({})

const initialState = fuelQuotesAdapter.getInitialState()

export const fuelQuotesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getFuelQuotes: builder.query({
            query: () => '/fuelQuotes',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedFuelQuotes = responseData.map(fuelQuote => {
                    fuelQuote.id = fuelQuote._id
                    return fuelQuote
                });
                return fuelQuotesAdapter.setAll(initialState, loadedFuelQuotes)
            },
            provideTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'FuelQuote', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'FuelQuote', id }))
                    ]
                } else return [{ type: 'FuelQuote', id: 'LIST' }]
            }
        }),
        addNewFuelQuote: builder.mutation({
            query: initialFuelQuote => ({
                url: '/fuelQuotes',
                method: 'POST',
                body: {
                    ...initialFuelQuote,
                }
            }),
            invalidatesTags: [
                { type: 'FuelQuote', id: 'LIST' }
            ]
        }),
        updateFuelQuote: builder.mutation({
            query: initialFuelQuote => ({
                url: '/fuelQuotes',
                method: 'PATCH',
                body: {
                    ...initialFuelQuote,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'FuelQuote', id: arg.id }
            ]
        }),
        deleteFuelQuote: builder.mutation({
            query: ({ id }) => ({
                url: '/fuelQuotes',
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'FuelQuote', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetFuelQuotesQuery,
    useAddNewFuelQuoteMutation,
    useUpdateFuelQuoteMutation,
    useDeleteFuelQuoteMutation,
} = fuelQuotesApiSlice

// Returns the query result object
export const selectedFuelQuotesResult = fuelQuotesApiSlice.endpoints.getFuelQuotes.select()

// Creates memoized selector
const selectFuelQuotesData = createSelector(
    selectedFuelQuotesResult,
    fuelQuotesResult => fuelQuotesResult.data // Normalized state object with ids & entities
)

// getSelectors create these seletors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllFuelQuotes,
    selectById: selectFuelQuoteById,
    selectIds: selectFuelQuoteIds
    // Pass in selector that returns the fuel quotes slice of state
} = fuelQuotesAdapter.getSelectors(state => selectFuelQuotesData(state) ?? initialState)
