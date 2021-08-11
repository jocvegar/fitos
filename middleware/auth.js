export default function({ store, redirect, $fire, route }) {
  if (route.path === "/admin") {
    if (!$fire.auth.currentUser && !store.state.user) return redirect("/");
  } else if (route.path === "/login") {
    if ($fire.auth.currentUser && store.state.user) return redirect("/admin");
  }
}
