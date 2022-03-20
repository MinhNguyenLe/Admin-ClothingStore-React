// @flow

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimatedView } from '../../components';
import { type RouterProps } from '../../types/react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  actions: {
    enterCustomerManager: () => any,
    leaveCustomerManager: () => any,
  },
} & RouterProps;

const mockdata = [
  {id: 1, email: 'test1@gmail.com', name: 'name1', histories: ['Suit', 'T-Shirt'], total: '$100' },
  {id: 2, email: 'test1@gmail.com', name: 'name1', histories: ['Suit', 'T-Shirt'], total: '$100' },
  {id: 3, email: 'test1@gmail.com', name: 'name1', histories: ['Suit', 'T-Shirt'], total: '$100' },
  {id: 4, email: 'test1@gmail.com', name: 'name1', histories: ['Suit', 'T-Shirt'], total: '$100' },
  {id: 5, email: 'test1@gmail.com', name: 'name1', histories: ['Suit', 'T-Shirt'], total: '$100' },
];

function CustomerManager({
  actions: { enterCustomerManager, leaveCustomerManager },
}: Props) {
  useEffect(() => {
    enterCustomerManager();

    return () => {
      leaveCustomerManager();
    };
  }, []);

  const notify = () => toast("Sent gift!");

  return (
    <AnimatedView>
      <div className="row">
        <div className="col-xs-12">
          <div className="panel">
            <header className="panel-heading">All customer</header>
            <div className="panel-body table-responsive">
              <div className="box-tools m-b-15">
                <div className="input-group">
                  <input
                    type="text"
                    name="table_search"
                    className="form-control input-sm pull-right"
                    style={{ width: '150px' }}
                    placeholder="Search"
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-default">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gmail</th>
                    <th>Purchase history</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {mockdata.map(user => {
                    return (
                      <tr
                        onClick = {notify}
                        key = {user.id}
                      >
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          {user.histories.map((cloth, index) => 
                            (<span key={index} className="label label-success">{cloth}</span>)
                          )}
                        </td>
                        <td>{user.total}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AnimatedView>
  );
}


export default CustomerManager;
