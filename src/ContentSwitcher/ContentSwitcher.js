import React from "react";
import PropTypes from "prop-types";
import { ContentSwitcher as ContentSwitcherM } from "carbon-components-react";

function ContentSwitcher(props) {
  return (
    <ContentSwitcherM {...props} style={{"width": "100%"}}>
      {props.children}
    </ContentSwitcherM>
  );
}

ContentSwitcher.propTypes = {
  /**
     * Pass in Switch components to be rendered in the ContentSwitcher
     */
    children: PropTypes.node,

    /**
     * Specify an optional className to be added to the container node
     */
    className: PropTypes.string,

    /**
     * Specify an `onChange` handler that is called whenever the ContentSwitcher
     * changes which item is selected
     */
    onChange: PropTypes.func,

    /**
     * Specify a selected index for the initially selected content
     */
    selectedIndex: PropTypes.number,
};

export { ContentSwitcher as default };
