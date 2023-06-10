import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import BoxTest from "../../core/main/BoxTestCrud";
import NavBar from "../../core/main/navigation/NavBar";

const ArtDesignArtic = () => {
  return (
    <Box>
      <NavBar link="/ArtDesignDash" route2="/Artic" />
      <Box>
        <BoxTest />
        <BoxApiInfo baseEndpoint="https://api.artic.edu/api/v1/artworks" />
        <Endpoints header="GET" endpoint="/" />
        <Endpoints
          header="GET"
          endpoint="/129884"
          description="/artworks/{id}"
        />
      </Box>
      <Endpoints
        header="GET"
        endpoint="?fields=id,title,artist_display,date_display,main_reference_number"
      />
      <Endpoints
        header="GET"
        endpoint="?page=2&limit=100"
        description="Include pagination"
      />
      <Endpoints header="GET" endpoint="/search?q=cats" />
      <Endpoints
        header="GET"
        endpoint="/search?q=cats&query[term][is_public_domain]=true"
      />
    </Box>
  );
};

export default ArtDesignArtic;
