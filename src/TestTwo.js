import React from "react";
import { Tree } from "antd";

const treeData = [
  {
    id: 7,
    isGroup: true,
    title: "Eon Group ",
    key: "0-0",
    children: [
      {
        id: 28,
        isGroup: false,
        title: "Marketing ",
        key: "0-0-0",
        children: [
          {
            id: 36,
            isGroup: false,
            title: "Finance",
            key: "0-0-0-0",
          },
          {
            id: 37,
            isGroup: false,
            title: "Accounting",
            key: "0-0-0-1",
          },
        ],
      },
      {
        id: 29,
        isGroup: false,
        title: "Human resource",
        key: "0-0-1",
      },
    ],
  },
  {
    id: 8,
    isGroup: true,
    title: "Eon Infosys",
    key: "0-1",
    children: [
      {
        id: 10,
        isGroup: false,
        title: "Software",
        key: "0-1-0",
        children: [
          {
            id: 11,
            isGroup: false,
            title: "Developer",
            key: "0-1-0-0",
          },
          {
            id: 12,
            isGroup: false,
            title: "Testing",
            key: "0-1-0-1",
          },
          {
            id: 13,
            isGroup: false,
            title: "Requirements",
            key: "0-1-0-2",
          },
        ],
      },
    ],
  },
];

const mainData = [
  {
    id: 7,
    name: "Eon Group ",
    tree: [
      {
        id: 28,
        name: "Marketing ",
        parent: null,
      },
      {
        id: 29,
        name: "Human resource",
        parent: null,
      },
      {
        id: 36,
        name: "Finance",
        parent: {
          id: 28,
          name: "Marketing ",
          parent: null,
        },
      },
      {
        id: 37,
        name: "Accounting",
        parent: {
          id: 28,
          name: "Marketing ",
          parent: null,
        },
      },
    ],
  },
  {
    id: 8,
    name: "Eon Infosys",
    tree: [
      {
        id: 10,
        name: "Software",
        parent: null,
      },
      {
        id: 11,
        name: "Developer",
        parent: {
          id: 10,
          name: "Software",
          parent: null,
        },
      },
      {
        id: 12,
        name: "Testing",
        parent: {
          id: 10,
          name: "Software",
          parent: null,
        },
      },
      {
        id: 13,
        name: "Requirements",
        parent: {
          id: 10,
          name: "Software",
          parent: null,
        },
      },
    ],
  },
];

const Demo = () => {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };

  // converted to tree
  const convertedToTree = (mainData, idx, parentKey = "0") => {
    const key = parentKey + "-" + idx;
    let treeData = {
      id: mainData.id,
      isGroup: mainData.tree.length > 0 ? true : false,
      title: mainData.name,
      key: key,
      children: mainData.tree,
    };
    return treeData;
  };

  const converted = convertedToTree(mainData[1], 1);

  mainData.map((data, idx) => {
    console.log(convertedToTree(data, idx)); // function call
  });

  // re-arrange child according to parent node
  const childRearrange = (array) => {
    const returnValue = [];
    for (let i = 0; i < array.length; i++) {
      let child = [];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j].parent && array[i].id === array[j].parent.id) {
          child.push(array[j]);
          array.splice(j, 1);
          j--;
        }
      }
      const item = {
        id: array[i].id,
        isGroup: false,
        title: array[i].name,
        key: "0-0-0",
      };
      if (child.length > 0) {
        item["children"] = child;
      }
      returnValue.push(item);
    }
    return returnValue;
  };

  mainData.map((array) => {
    console.log(childRearrange(array.tree)); // function call
  });

  return (
    <Tree
      checkable
      defaultExpandAll
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  );
};

export default Demo;
