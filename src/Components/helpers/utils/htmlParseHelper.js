import axios from "axios";
import parse from "html-react-parser";

const htmlParseHelper = (content) => {
  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === "remove") {
        return <></>;
      }
    }
  };

  if (content) {
    return parse(content, options);
  }
}

export default htmlParseHelper;