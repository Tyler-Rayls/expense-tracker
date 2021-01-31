import React from 'react';

const Family = () => {
  return (
    <div>
      <h2>Family 1</h2>
      <table class="table table-sm">
        <thead>
          <tr>
            <th>Family Members</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shane Yen</td>
          </tr>
          <tr>
            <td>Shane Yen</td>
          </tr>
          <tr>
            <td>Shane Yen</td>
          </tr>
          <tr>
            <td>Total spending:</td>
            <td>$3409.53</td>
          </tr>
        </tbody>
      </table>
      <button>
        Leave Family
      </button>
      <h2>Family 2</h2>
      <table class="table table-sm">
        <thead>
          <tr>
            <th>Family Members</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shane Yen</td>
          </tr>
          <tr>
            <td>Shane Yen</td>
          </tr>
          <tr>
            <td>Shane Yen</td>
          </tr>
          <tr>
            <td>Total spending:</td>
            <td>$5984.34</td>
          </tr>
        </tbody>
      </table>
      <button>
        Leave Family
      </button>

      <h4>Join a new family:</h4>
      <form>
        <label>
          Input family ID:&nbsp;
          <input type="text" name="surname" />
        </label>
        &nbsp;
        <input type="submit" value="Submit" />
      </form>

      <h4>Create a new family:</h4>
      <form>
        <label>
          Input surname:&nbsp;
          <input type="text" name="surname" />
        </label>
        &nbsp;
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Family;