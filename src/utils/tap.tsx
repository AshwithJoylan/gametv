import React, {useMemo} from 'react';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import {onGestureEvent, timing, contains} from 'react-native-redash';
import {StyleProp, ViewStyle} from 'react-native';
import Animated, {
  Value,
  useCode,
  block,
  cond,
  Easing,
  set,
  eq,
  onChange,
  call,
  Clock,
} from 'react-native-reanimated';

const {UNDETERMINED, END, BEGAN, CANCELLED, FAILED} = State;

interface TapProps {
  /**
   * @description State
   * @default new Value(UNDETERMINED)
   * @type {Animated.Value<number>}
   * @memberof TapProps
   */
  state?: Animated.Value<number>;
  /**
   * @description Animated Value
   * @default new Value(0)
   * @type {Animated.Value<number>}
   * @memberof TapProps
   */
  value?: Animated.Value<number>;
  /**
   * @description children
   * @type {React.ReactNode}
   * @memberof TapProps
   */
  children: React.ReactNode;
  /**
   * @description Container style
   * @type {StyleProp<ViewStyle>}
   * @memberof TapProps
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * @description style for the children
   * @type {StyleProp<ViewStyle>}
   * @memberof TapProps
   */
  style?: StyleProp<ViewStyle>;
  /**
   * @description Function call when button pressed
   * @memberof TapProps
   */
  onPress?: () => void;
}

export default ({
  state: tapState,
  value: tapValue,
  children,
  style = {},
  onPress = () => {},
}: TapProps) => {
  const {state, value, shouldScale, clock} = useMemo(
    () => ({
      state: tapState || new Value(UNDETERMINED),
      value: tapValue || new Value(0),
      shouldScale: new Value(0),
      clock: new Clock(),
    }),
    [tapState, tapValue],
  );

  const onEvent = onGestureEvent({state});

  useCode(
    () =>
      block([
        cond(eq(state, BEGAN), set(shouldScale, 1)),
        cond(contains([FAILED, CANCELLED, END], state), [set(shouldScale, 0)]),
        onChange(state, cond(eq(state, END), call([], onPress))),
        cond(
          eq(shouldScale, 1),
          set(
            value,
            timing({
              from: scale,
              to: 0.9,
              duration: 150,
              clock,
              easing: Easing.linear,
            }),
          ),
          set(
            value,
            timing({
              from: scale,
              to: 1,
              clock,
              duration: 150,
              easing: Easing.linear,
            }),
          ),
        ),
      ]),
    [],
  );

  // Interpolations
  const scale = value;

  return (
    <TapGestureHandler {...onEvent}>
      <Animated.View
        style={[
          style,
          {
            transform: [{scale}],
          },
        ]}>
        {children}
      </Animated.View>
    </TapGestureHandler>
  );
};
