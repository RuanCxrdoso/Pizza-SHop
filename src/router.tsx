import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/AppLayout'
import { AuthLayout } from './pages/_layouts/AuthLayout'
import { NotFound } from './pages/404'
import { Dashboard } from './pages/app/dashboard/Dashboard'
import { Orders } from './pages/app/orders/Orders'
import { SignIn } from './pages/auth/Sign-in'
import { SignUp } from './pages/auth/Sign-up'

// export function Router() {
//   return (
//     <Routes>
//       <Route path="/" element={<AppLayout />} errorElement={<NotFound />}>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/orders" element={<Orders />} />
//       </Route>

//       <Route path="/" element={<AuthLayout />}>
//         <Route path="/sign-in" element={<SignIn />} />
//         <Route path="/sign-up" element={<SignUp />} />
//       </Route>
//     </Routes>
//   )
// }

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
