import { deleteAsync } from 'del'

export const reset = () => deleteAsync(app.path.clean)

export const resetHtml = () => deleteAsync((app.path.cleanHtml))

export const resetDistHtml = () => deleteAsync((app.path.cleanDistHtml))
