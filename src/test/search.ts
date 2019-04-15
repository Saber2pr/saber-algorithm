import { deepSearch, DFSCallback, DFSResult, DFSQuick } from '../core/search'

export function test_search_ts() {
  const json = [
    {
      first: [
        {
          age: 1,
          value: 'test1'
        },
        {
          age: 2,
          value: 'test2'
        }
      ],
      second: [
        {
          age: 3,
          value: 'test3'
        },
        {
          age: 4,
          value: 'test4'
        }
      ]
    },
    {
      third: [
        {
          age: 5,
          value: 'test5'
        },
        {
          age: 6,
          value: [
            {
              age: 7,
              value: 'test7'
            },
            {
              age: 8,
              value: 'test8'
            }
          ]
        }
      ]
    }
  ]
  // deepSearch(json, value => console.log(value))

  interface Test {
    value: number
    children?: Test[]
  }

  const root: Test = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          {
            value: 3
          }
        ]
      },
      {
        value: 4
      },
      {
        value: 5,
        children: [
          {
            value: 6,
            children: [
              {
                value: 7
              }
            ]
          }
        ]
      }
    ]
  }

  // BFS(root, n => console.log(n.value))
  DFSQuick(root, n => console.log(n.value))
}
