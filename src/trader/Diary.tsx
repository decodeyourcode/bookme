import React, { FC, Fragment, useMemo } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  Calendar,
  DateLocalizer,
  Views,
  momentLocalizer,
} from 'react-big-calendar'
import * as dates from '../util/dates'

const mLocalizer = momentLocalizer(moment);

interface Props {
    children: any
}
const ColoredDateCellWrapper: FC<Props> = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
      style: {
        backgroundColor: 'lightblue',
      },
    })

const events = [
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10),
      },
];

export default function Diary({
    localizer = mLocalizer,
    ...props
  }) {
    const { components, defaultDate, max, views } = useMemo(
      () => ({
        components: {
          //timeSlotWrapper: ColoredDateCellWrapper,
        },
        defaultDate: new Date(2015, 3, 1),
        max: dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours'),
        views: [Views.DAY],
      }),
      []
    )
  
    return (
      <Fragment>
        <div className="height600" {...props}>
          <Calendar
            components={components}
            defaultDate={defaultDate}
            events={events}
            localizer={localizer}
            max={max}
            showMultiDayTimes
            step={60}
            views={views}
          />
        </div>
      </Fragment>
    )
  }
  Diary.propTypes = {
    localizer: PropTypes.instanceOf(DateLocalizer),
  }