const MainLayout = (props) => {
    return (
      <main className="h-screen w-screen mt-4 lg:mt-10 lg:px-8 px-2">
        {props.children}
      </main>
    );
  };
  
  export default MainLayout;