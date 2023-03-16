import { createBrowserRouter } from 'react-router-dom'

import { Home, FeedbackUploading } from '../pages'
import { RootLayout } from '../layouts/RootLayout/RootLayout'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'image/:fileName',
        element: <FeedbackUploading />,
      },
    ],
  },
])
