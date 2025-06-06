import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/use-auth";
import { CartProvider } from "@/hooks/use-cart";
import { WishlistProvider } from "@/hooks/use-wishlist";
import { RootLayout } from "./layout/root-layout";
import { ProtectedRoute } from "./lib/protected-route";
import { ReactElement } from "react";

// Pages
import HomePage from "@/pages/home-page";
import AuthPage from "@/pages/auth-page";
import ShopPage from "@/pages/shop-page";
import ProductDetailPage from "@/pages/product-detail-page";
import CartPage from "@/pages/cart-page";
import CheckoutPage from "@/pages/checkout-page";
import ScentFinderPage from "@/pages/scent-finder-page";
import AccountPage from "@/pages/account-page";
import OrdersPage from "@/pages/orders-page";
import OrderDetailPage from "@/pages/order-detail-page";
import AddressesPage from "@/pages/addresses-page";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <RootLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/products/:slug" component={ProductDetailPage} />
        <Route path="/cart" component={CartPage} />
        <ProtectedRoute path="/checkout" component={CheckoutPage} />
        <Route path="/scent-finder" component={ScentFinderPage} />
        <ProtectedRoute path="/account" component={AccountPage} />
        <ProtectedRoute path="/orders" component={OrdersPage} />
        <ProtectedRoute path="/orders/:id" component={OrderDetailPage} />
        <ProtectedRoute path="/addresses" component={AddressesPage} />
        <Route path="/:rest*" component={NotFound} />
      </Switch>
    </RootLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Router />
            <Toaster />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
