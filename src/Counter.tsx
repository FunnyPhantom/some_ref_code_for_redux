import React, {useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addCount, decCount, initCounter} from "./redux/counterAction";

interface CounterProps {
  counterValue: number
  onAddValue: () => void
  onDecreaseValue: () => void
  initCounter: () => void
  counterLoading: boolean
  error: string,
  hasError: boolean,
}

const Counter: React.FC<CounterProps> = ({counterValue, onAddValue, onDecreaseValue, initCounter, counterLoading,error, hasError}) => {
  useEffect(() => {
    initCounter()
  }, [])

  return <div>
    <label onClick={onAddValue}>+</label>
    <label>{counterLoading ? '...': hasError ? 'SOMEHTING WENT WRONG WHAH WHAT ' + error: counterValue}</label>
    <label onClick={onDecreaseValue}>-</label>
  </div>
}


const mapStateToProps = (s: any) => ({
  counterValue: s.counter.value,
  counterLoading: s.counter.loading,
  hasError: s.counter.error !== '',
  error: s.counter.error
})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  onAddValue: addCount,
  onDecreaseValue: decCount,
  initCounter: initCounter
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
