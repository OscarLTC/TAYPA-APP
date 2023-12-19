import * as admin from 'firebase-admin';

export class Firebase {
  public initialize(): void {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: 'taypa-app',
        clientEmail:
          'firebase-adminsdk-yaph0@taypa-app.iam.gserviceaccount.com',
        privateKey:
          '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC6/xPwer9CEFv5\nIDxOR2jW1PtMFS1ylccUJR5sRHH0LnFYamlhYwsk2QHBTrMeeD76+qR1TMAAU8Ho\nM1oxw3rOFPUrHV000DpSd2QnwVV506mHYcjgFpCinpbidVDI/JPpsofGkAVxKs4N\nAZfbrOUTP3mQd4t5AN+Awz76+EodpgHeB9diTJn0N0m8qevQawylxyTsgLEsAySn\nPvMCpTTq09dZ+cW8jehfTY3CC3UH/ZZaamJwnqRoHHkTonLGR3ISWWpVb3pRQsgh\n4PYjTv/TJ9TXOKin9VTSAyntikl1KLQ4xofXKcdno2eftTfe7MiJR9w2Qdq3A15U\n3OAwfDqNAgMBAAECggEABifJLIrV13zGkkcZ3rFiEmROmCmmswiaiR+Geb9J1jH3\n+cmZVqMJTF+D7vmPH6sko5bzKYgeIxFrjVNKnkW8udW3X+gNCxgc1PcbvTIThSAC\nPhpQn8COZuDI8oM0s0Q0ZQzct4NCv2Y1A/kv89BXdnbWvEcuUgx4NWErJkOP3DVU\nX100kdk7MyJ9vJV3Hm2rbIFG3RI07nTVA/pdoJtkfo2nD5JVODVLVZYrfyMHAhr6\nr0wgT6EjB4QWD4w8+24yfIz2ZjdN3tbhdYHo3ImCZIPrSeGUBDDbzzXCKC4xHasD\njYpQYtcv6fmYtTEkaF5nkDNxiWk904PfINVO7hbaTwKBgQDt4DeI0QMfbiB3wZr6\nDMsl+hUOoVuccersuGYmyCnlK8BKZH6+F32DZce+qc4vWlvmis3ttX3CwchOqYbY\n73FfSkk+22n9rxztbEEd5tDcyg4H8nSXdBpuP0rny0U15Dy1blO3EVyYe9d1pFkx\nz7etEFEUxsfZsM7Hhod5IY/fkwKBgQDJPnRDz1Z6kDx6BBOqwTF8ulnWmW7R+zAM\n1P3YTNNBXtHzLPhOuKqJohak0yMEicKVFwkSHLnrSoOuwnSV7UpaXhZ9JU4Eg316\nZp6mWuYMxU4VoujjytyS56Q+P7SNcRR7X2o4jV3hEXjeXhursXugkZAUjPGy5i1w\nsIs79XKRXwKBgQDW+QnXKGT1E5ZeA+al0cgJsx8ykJp1IPJZKjCPHdfW1xo5YOa1\nrg7tH59LbLP8UWG6UHjYOWvFBVGb3VMTXBkOL9lP6AS6kXXID0wt1Lmuvx+9CN1b\nPj7goWx1XFtY38IJiQI48ITI/Spzk6pT/M+WpKdR6m8UCdhlsutdifo25wKBgHHE\nHcQL3W6SRa4QyfF5H/nL+2em+5A3eVV3vz1dSPwml3fqj0Epgjcma7ioJ560Jk1U\nZWtY0/3g9QqBoZj0OVlW4U3EHhPNJc1hYATZVD4Z+Geg3hmQoBtoWmBacT6Yk6Sf\nLxRjTpQi5XqIJwpr3mDKiXIkr6qcF0oic8PkoOzvAoGAXjkkqjlWap/l656DR/Qm\nUiN1c7El/+hA4rAGgsRtc5OQA8n/7MHKZNkoVdqthSWEOAMjm1NkSBUnhXR7fNt+\n9TnG22atPy0e6Q+JQI+hZn+qlDBo04+tbCy0MaBnGIPyHBpZIa1w/m/P6jQwQMcT\nyfpogRHS0aM6tvKZ2DFyGYo=\n-----END PRIVATE KEY-----\n',
      }),
    });
  }

  public firestore(): admin.firestore.Firestore {
    return admin.firestore();
  }

  public storage(): admin.storage.Storage {
    return admin.storage();
  }

  public auth(): admin.auth.Auth {
    return admin.auth();
  }
}
