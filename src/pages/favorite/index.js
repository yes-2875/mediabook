export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/favourites",
      permanent: false,
    },
  };
}

export default function FavoriteRedirect() {
  return null;
}
