import React from "react";

const Text = () => {
  return (
    <div>
      <h2>Props vs state</h2>
      <p>
        Data is transferred from a parent component to a child component via
        props (short for "properties"). As they are read-only, the child
        component cannot make any direct changes to them. Props are frequently
        used to configure components with data that differs from one component
        instance to the next.
      </p>
      <p>
        On the other hand, state is utilized within a component to handle data
        that can change over time. State may be modified using the setState()
        method because, unlike props, it is mutable. Typically, state is used to
        store information that is unique to a single instance of a component and
        that may change in response to events like user input or other
        occurrences.
      </p>
      <h2>How does useState work</h2>
      <p>
        UseState is a hook in React that permits state to be present in
        functional components. The initial state value is set to initialState by
        the useState hook when the component is first rendered. React updates
        the state value and causes a re-render of the component when setState is
        called.
      </p>
      <h2>Purpose of useEffect other than fetching data</h2>
      <p>
        useEffects is also used in the following cases: 1. Managing
        subscriptions: useEffect can be used to subscribe to some external data
        source, such as a WebSocket or an event emitter. 2. Updating the
        document title: useEffect can be used to update the document title based
        on the current state of the component. This can be done by using the
        document.title property inside the effect function. 3. Managing timers
        and animations:you can use useEffect to control a timer that updates the
        component states. 4. Performing side effects: useEffect can be used to
        perform any side effects that don't directly affect the component's
        state. generally useEffect is used when you need to execute some code
        after the component is mounted and before unmounted.
      </p>
      <h2>How Does React work</h2>
      <p>
        React, a JS library is used to build UIs using components. React apps
        are made of components which are reusable building blocks. To update DOM
        quickly, React uses Virtual DOM which is a virtual example of actual
        DOM. React uses state and props to manage data. The component's internal
        data, which might vary over time, is represented by state. Data that is
        transferred from a parent component to a child component is known as a
        props.
      </p>
      <p>
        React uses a synthetic event system to manage events that offers a
        constant user experience across browsers. React updates a component's
        state or props when an event is triggered, which causes the component to
        be re-rendered and the Virtual DOM to be updated.
      </p>
      <p>
        React uses component based architecture, virutal DOM, State and Props
        system to efficiently update actual DOM when component or user
        interaction changes.
      </p>
    </div>
  );
};

export default Text;
