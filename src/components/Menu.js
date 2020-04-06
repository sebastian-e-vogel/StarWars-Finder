import React from "react";
import { connect } from "react-redux";
import { selectSection } from "../redux/actions/SelectSectionActions";
import "./styles.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Menu(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(1151));
  const changeSection = section => {
    props.selectSection(section);
  };

  return (
    <div className="Menu">
      <ButtonGroup orientation={matches ? "vertical" : "horizontal"}>
        <Button onClick={() => changeSection("personajes")}>Personajes</Button>
        <Button onClick={() => changeSection("peliculas")}>Peliculas</Button>
      </ButtonGroup>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectSection: section => dispatch(selectSection(section))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
