import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';

// Register a custom font

// Create styles
const styles = StyleSheet.create({
  page: {
    position: 'relative',
    padding: 30,
    justifyContent: ' flex-start'
  },
  MidPoint: {
    marginTop: 30,
  },
  mailing: {
    fontWeight: 'bold',
    fontSize: 12,
    textDecoration: 'underline',
    marginTop: 8
  },
  imgOne: {
    width: 70,
    height: 60
  },
  imgTwo: {
    width: 120,
    height: 130
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 12,

  },

  Info: {
    flexDirection: 'row',
    position: ' relative',
    paddingBottom: 10,
  },

  DamiOne: {
    marginLeft: 2,
    width: '50%'
  },
  DamiTwo: {
    width: '50%'
  },

  header: {
    flexDirection: 'row',
    backgroundColor: '#0000ff',
    color: 'white',
  },
  Title: {
    marginLeft: 10,
    padding: 5,
    fontWeight: 'extrabold'
  },
  TitleAddress: {
    marginLeft: 10,
    padding: 5,
    fontSize: 14,
  },
  Shead: {
    fontSize: 13,
    marginBottom: 2,
    fontWeight: 'extrabold',
    backgroundColor: '#0000ff',
    padding: 8,
    color: 'white',
    width: 267
  },
  heading: {
    fontSize: 13,
    marginBottom: 2,
    fontWeight: 'extrabold',
    backgroundColor: '#0000ff',
    padding: 8,
    color: 'white',
    width: '50%',
  },
  subheading: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  one: {
    marginTop: 0,
    marginLeft: 2
  },
  text: {
    fontSize: 10,
    marginTop: 4,
    paddingTop: 2,
    textAlign: 'left'
  },

  divider: {
    marginTop: 0,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    display: 'block',
    bottom: 70,
    borderTop: ' 1px solid black',
    width: '100%',
    fontSize: 10,
    justifyContent: 'space-between',
    // marginTop: 20,
    marginLeft: 30,
  },
  footerText: {
    marginTop: 5,
    marginLeft: 0
  },
  pageNumber: {
    marginTop: 5,
  },
  printDateTime: {
    marginTop: 5,
  },
});

// Create Document Component
const MyDocument = () => {
  return (
    <Document title='Report'>
      <Page size="A4" style={styles.page}>
        {/* Start */}

        <View style={styles.header} >
          <View>
            <Image style={styles.imgOne} src='../src/assets/img/download.jfif'></Image>
          </View>
          <View>
            <Text style={styles.Title}>IDEAL MODEL ACADEMY</Text>
            <Text style={styles.TitleAddress}>Dapunia, Mymensingh Sadar, Mymensingh</Text>
          </View>
        </View>
        {/* End */}

        {/* Start */}


        <View style={styles.MidPoint} >

          <View style={styles.section}>
            <View style={styles.one}>
              <View><Text style={styles.Shead}>Shohag</Text></View>
              <View><Text style={styles.mailing}>Mailing Address</Text></View>
              <Text style={styles.text}>Email <Text style={styles.textSide}>: xxx@Gamil.com  </Text></Text>
              <Text style={styles.text}>Mobile<Text style={styles.textSide}>: 01719803204 </Text></Text>
            </View>
            <View>
              <Image style={styles.imgTwo} src='../src/assets/img/bird_2.jpg'></Image>
            </View>
          </View>

          {/* End */}

          <View><Text style={styles.heading}>Basic Information</Text></View>
          <View style={styles.divider} />
          {/* Start */}
          <View style={styles.Info}>
            <View style={styles.DamiOne}>
              <Text style={styles.text}>ID : 171899</Text>
              <Text style={styles.text}>Name : Shohag  </Text>
              <Text style={styles.text}>Gender : Male </Text>
              <Text style={styles.text}>DateofBirth : 15/12/1998 </Text>
              <Text style={styles.text}>Religion : Islam </Text>
              <Text style={styles.text}>Mobile No(Primary) : 01719803204 </Text>
            </View>

            <View style={styles.DamiTwo}>
              <Text style={styles.text}>Mobile No(Optional) : </Text>
              <Text style={styles.text}>Email(Primary) :  </Text>
              <Text style={styles.text}>Join Date : 01/01/2023 </Text>
              <Text style={styles.text}>Resign Date :  </Text>
              <Text style={styles.text}>Resign note : </Text>
            </View>
          </View>

          {/* End */}
          <View><Text style={styles.heading}>Personal Information</Text></View>
          <View style={styles.divider} />
          {/* Start */}

          <View style={styles.Info}>
            <View style={styles.DamiOne}>
              <Text style={styles.text}>Father Name : Jabber</Text>
              <Text style={styles.text}>Mother name : </Text>
              <Text style={styles.text}>Marital Status : Unmaried</Text>
              <Text style={styles.text}>Spouse Name :  </Text>
              <Text style={styles.text}>Blood Group :  A+</Text>
              <Text style={styles.text}>Child : </Text>
            </View>
            <View style={styles.DamiTwo}>
              <Text style={styles.text}>Nationality : </Text>
              <Text style={styles.text}>National ID :</Text>
              <Text style={styles.text}>Passport No : </Text>
              <Text style={styles.text}>TIN No :  </Text>
              <Text style={styles.text}>MPO ID : </Text>
              <Text style={styles.text}>Index ID :</Text>
            </View>
          </View>

          {/* End */}
          <View><Text style={styles.heading}>Address Information</Text></View>
          <View style={styles.divider} />
          {/* Start */}

          <View style={styles.Info} wrap={false}>
            <View style={styles.DamiOne}>
              <Text style={styles.text}>Address Type : Permanent</Text>
              <Text style={styles.text}>Village :</Text>
              <Text style={styles.text}>Post Office :</Text>
              <Text style={styles.text}>Postal Code : </Text>
              <Text style={styles.text}>Thana/Upazila : </Text>
              <Text style={styles.text}>District Name : </Text>
              <Text style={styles.text}>Division Name : </Text>
              <Text style={styles.text}>Country Name : Bangladesh </Text>
            </View>

            <View style={styles.DamiTwo}>
              <Text style={styles.text}>Address Type : Present</Text>
              <Text style={styles.text}>Village :</Text>
              <Text style={styles.text}>Post Office :</Text>
              <Text style={styles.text}>Postal Code : </Text>
              <Text style={styles.text}>Thana/Upazila : </Text>
              <Text style={styles.text}>District Name : </Text>
              <Text style={styles.text}>Division Name : </Text>
              <Text style={styles.text}>Country Name : Bangladesh </Text>
            </View>
          </View>

          {/* End */}
          <View style={styles.EduWrap} wrap={false} pageBrake="avoid">
            <View><Text style={styles.heading}  >Education Information</Text></View>
            <View style={styles.divider} />

            {/* Start */}
            <View style={styles.Info} wrap={false} pageBrake="avoid">
              <View style={styles.DamiOne}>
                <Text style={styles.text}>Title :  </Text>
                <Text style={styles.text}>Board :  </Text>
                <Text style={styles.text}>Group :  </Text>
                <Text style={styles.text}>Subject :  </Text>
                <Text style={styles.text}>Result :  </Text>
                <Text style={styles.text}>Marks :  </Text>
              </View>
              <View style={styles.DamiTwo}>
                <Text style={styles.text}>Out of CGPA :  </Text>
                <Text style={styles.text}>Passing Year :  </Text>
                <Text style={styles.text}>Duration :  </Text>
                <Text style={styles.text}>Achievement :  </Text>
                <Text style={styles.text}>Institute Name :  </Text>
                <Text style={styles.text}>Grade :  </Text>
              </View>
            </View>
          </View>

          {/* End */}
          <View><Text style={styles.heading}>Training Information</Text></View>
          <View style={styles.divider} />
          {/* Start */}


          <View style={styles.Info}>
            <View style={styles.DamiOne}>
              <Text style={styles.text}>Title :  </Text>
              <Text style={styles.text}>Institute Name :  </Text>
              <Text style={styles.text}>Topic Covered :  </Text>
              <Text style={styles.text}>Duration : </Text>
              <Text style={styles.text}>Start Date : </Text>
            </View>
            <View style={styles.DamiTwo}>
              <Text style={styles.text}>Location :  </Text>
              <Text style={styles.text}>Country :  </Text>
              <Text style={styles.text}>Achievement :  </Text>
              <Text style={styles.text}>Note :  </Text>
              <Text style={styles.text}>End Date :  </Text>
            </View>
          </View>

          {/* End */}
          <View><Text style={styles.heading}>Bank Information</Text></View>
          <View style={styles.divider} />

          {/* Start */}

          <View style={styles.Info}>
            <View style={styles.DamiOne}>
              <Text style={styles.text}>Title :  </Text>
              <Text style={styles.text}>Account number :  </Text>
              <Text style={styles.text}>Account Type :  </Text>
            </View>
            <View style={styles.DamiTwo}>
              <Text style={styles.text}>Primary status : </Text>
              <Text style={styles.text}>Bank Name :  </Text>
              <Text style={styles.text}>Branch :  </Text>
            </View>
          </View>

          {/* End */}
          <View><Text style={styles.heading}>Reference Information</Text></View>
          <View style={styles.divider} />
          {/* Start */}

          <View style={styles.Info}>
            <View style={styles.DamiOne}>
              <Text style={styles.text}>Name :  </Text>
              <Text style={styles.text}>Designation : </Text>
              <Text style={styles.text}>Organization : </Text>
              <Text style={styles.text}>Address :  </Text>
            </View>
            <View style={styles.DamiTwo}>
              <Text style={styles.text}>Mobile :  </Text>
              <Text style={styles.text}>Email : </Text>
              <Text style={styles.text}>Relation : </Text>
            </View>
          </View>

          {/* End */}
          <View><Text style={styles.heading}>Other Information</Text></View>
          <View style={styles.divider} />

          {/* Start */}

          <View style={styles.Info}>
            <View style={styles.DamiOne}>
              <Text style={styles.text}>Specialization : </Text>
              <Text style={styles.text}>Extra Curriculam : </Text>
            </View>
            <View style={styles.DamiTwo}>
              <Text style={styles.text}>Hobby : </Text>
              <Text style={styles.text}>Language : </Text>
            </View>
          </View>

          {/* End */}
        </View>
        <Footer></Footer>
      </Page>
    </Document>
  )
}



const Footer = () => (

  <View style={styles.footer} fixed >
    <Text style={styles.footerText}>Design and developed by: Walton Group</Text>
    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => ` ${pageNumber} / ${totalPages}`} />
    <Text style={styles.printDateTime}>Print Date and Time: Monday, 8 July 2024 11: 57: 44 AM</Text>
  </View>
)

const App = () => {
  return (
    <div>
      <PDFViewer width={900} height={1200}>
        <MyDocument />
      </PDFViewer>
    </div>
  )
}

export default App;
