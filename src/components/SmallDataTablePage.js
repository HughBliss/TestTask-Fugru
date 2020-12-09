import React, { useState, useEffect, memo } from 'react'
import { TableSmallDataUser } from './TableSmallDataUser'

const component = (props) => {
  const [dataUser, setDataUser] = useState(props.smallDataTableUser)

  useEffect(() => {
    setDataUser(props.smallDataTableUser.data)
  }, [props.smallDataTableUser.data])

  if (props.smallDataTableUser.isFetchingSmallData) {
    return <h1>Загрузка</h1>
  } else if (!props.smallDataTableUser.isFetchingSmallData) {
    if (props.smallDataTableUser.data.length < 2) {
      props.getSmallDataTableUser()
      return <h1>123</h1>
    } else if (props.smallDataTableUser.data.length > 2) {
      return (
        <div>
          <TableSmallDataUser dataUserSmall={dataUser} />
        </div>
      )
    }
  }
}

export const SmallDataTablePage = memo(component)
