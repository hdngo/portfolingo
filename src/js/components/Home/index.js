import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    componentDidMount() {
        console.log('rendered home');
    }

    render (){
        return (
            <React.Fragment>
                <h1>Homepage</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis magna id lorem viverra imperdiet. Proin feugiat metus mi, eget feugiat lectus finibus tincidunt. Aliquam condimentum imperdiet erat eget tempus. Sed fermentum augue et mi dignissim, et consequat augue dignissim. Nullam suscipit tellus diam, id commodo felis commodo blandit. Etiam dapibus quis ex nec finibus. Nulla eu ullamcorper urna. Sed ornare vehicula mauris vitae cursus. Proin a ullamcorper leo, nec consequat augue. Aenean orci neque, porta et neque nec, vestibulum tincidunt dolor. Suspendisse potenti. Maecenas quis nibh bibendum est consectetur rhoncus. Pellentesque vitae varius eros, in maximus velit. Aenean molestie augue libero, id malesuada nisi vulputate hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                Quisque luctus ex id cursus pharetra. Suspendisse eget tellus turpis. Quisque malesuada diam mauris, non semper metus feugiat at. Maecenas non dolor imperdiet, lobortis arcu ut, dictum magna. Ut pharetra porttitor velit, ac molestie risus placerat nec. Praesent id est sed enim ornare tempus id dictum lorem. Aenean blandit porttitor mi, ac luctus magna gravida ut. Morbi eu tincidunt augue. Duis nec nisl lobortis, volutpat velit accumsan, dignissim arcu. Aliquam molestie turpis ac neque molestie suscipit. In magna urna, suscipit nec molestie non, congue vitae arcu. Nunc mattis, neque quis aliquam molestie, ipsum velit congue sapien, in gravida arcu turpis ut felis.
                
                Duis vel lorem purus. Integer tortor velit, pellentesque a vulputate sed, blandit ac felis. Duis vitae vestibulum dolor. Phasellus feugiat finibus tellus, et interdum nulla interdum eget. Sed ac ante a turpis hendrerit vehicula. In porta, tellus eu egestas imperdiet, lorem eros hendrerit magna, vel suscipit leo elit sed tortor. Morbi fringilla risus sit amet pellentesque ultrices. Mauris at fermentum nibh. Quisque sodales, magna a molestie fermentum, leo sem interdum nunc, eget lobortis quam velit vel leo. Sed finibus nibh id lectus efficitur facilisis. Praesent in mollis lorem. Sed nisi velit, scelerisque ac mauris et, luctus vulputate ex. In ultricies risus sed gravida ullamcorper. In in elementum mi.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis magna id lorem viverra imperdiet. Proin feugiat metus mi, eget feugiat lectus finibus tincidunt. Aliquam condimentum imperdiet erat eget tempus. Sed fermentum augue et mi dignissim, et consequat augue dignissim. Nullam suscipit tellus diam, id commodo felis commodo blandit. Etiam dapibus quis ex nec finibus. Nulla eu ullamcorper urna. Sed ornare vehicula mauris vitae cursus. Proin a ullamcorper leo, nec consequat augue. Aenean orci neque, porta et neque nec, vestibulum tincidunt dolor. Suspendisse potenti. Maecenas quis nibh bibendum est consectetur rhoncus. Pellentesque vitae varius eros, in maximus velit. Aenean molestie augue libero, id malesuada nisi vulputate hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                Quisque luctus ex id cursus pharetra. Suspendisse eget tellus turpis. Quisque malesuada diam mauris, non semper metus feugiat at. Maecenas non dolor imperdiet, lobortis arcu ut, dictum magna. Ut pharetra porttitor velit, ac molestie risus placerat nec. Praesent id est sed enim ornare tempus id dictum lorem. Aenean blandit porttitor mi, ac luctus magna gravida ut. Morbi eu tincidunt augue. Duis nec nisl lobortis, volutpat velit accumsan, dignissim arcu. Aliquam molestie turpis ac neque molestie suscipit. In magna urna, suscipit nec molestie non, congue vitae arcu. Nunc mattis, neque quis aliquam molestie, ipsum velit congue sapien, in gravida arcu turpis ut felis.
                
                Duis vel lorem purus. Integer tortor velit, pellentesque a vulputate sed, blandit ac felis. Duis vitae vestibulum dolor. Phasellus feugiat finibus tellus, et interdum nulla interdum eget. Sed ac ante a turpis hendrerit vehicula. In porta, tellus eu egestas imperdiet, lorem eros hendrerit magna, vel suscipit leo elit sed tortor. Morbi fringilla risus sit amet pellentesque ultrices. Mauris at fermentum nibh. Quisque sodales, magna a molestie fermentum, leo sem interdum nunc, eget lobortis quam velit vel leo. Sed finibus nibh id lectus efficitur facilisis. Praesent in mollis lorem. Sed nisi velit, scelerisque ac mauris et, luctus vulputate ex. In ultricies risus sed gravida ullamcorper. In in elementum mi.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis magna id lorem viverra imperdiet. Proin feugiat metus mi, eget feugiat lectus finibus tincidunt. Aliquam condimentum imperdiet erat eget tempus. Sed fermentum augue et mi dignissim, et consequat augue dignissim. Nullam suscipit tellus diam, id commodo felis commodo blandit. Etiam dapibus quis ex nec finibus. Nulla eu ullamcorper urna. Sed ornare vehicula mauris vitae cursus. Proin a ullamcorper leo, nec consequat augue. Aenean orci neque, porta et neque nec, vestibulum tincidunt dolor. Suspendisse potenti. Maecenas quis nibh bibendum est consectetur rhoncus. Pellentesque vitae varius eros, in maximus velit. Aenean molestie augue libero, id malesuada nisi vulputate hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                Quisque luctus ex id cursus pharetra. Suspendisse eget tellus turpis. Quisque malesuada diam mauris, non semper metus feugiat at. Maecenas non dolor imperdiet, lobortis arcu ut, dictum magna. Ut pharetra porttitor velit, ac molestie risus placerat nec. Praesent id est sed enim ornare tempus id dictum lorem. Aenean blandit porttitor mi, ac luctus magna gravida ut. Morbi eu tincidunt augue. Duis nec nisl lobortis, volutpat velit accumsan, dignissim arcu. Aliquam molestie turpis ac neque molestie suscipit. In magna urna, suscipit nec molestie non, congue vitae arcu. Nunc mattis, neque quis aliquam molestie, ipsum velit congue sapien, in gravida arcu turpis ut felis.
                
                Duis vel lorem purus. Integer tortor velit, pellentesque a vulputate sed, blandit ac felis. Duis vitae vestibulum dolor. Phasellus feugiat finibus tellus, et interdum nulla interdum eget. Sed ac ante a turpis hendrerit vehicula. In porta, tellus eu egestas imperdiet, lorem eros hendrerit magna, vel suscipit leo elit sed tortor. Morbi fringilla risus sit amet pellentesque ultrices. Mauris at fermentum nibh. Quisque sodales, magna a molestie fermentum, leo sem interdum nunc, eget lobortis quam velit vel leo. Sed finibus nibh id lectus efficitur facilisis. Praesent in mollis lorem. Sed nisi velit, scelerisque ac mauris et, luctus vulputate ex. In ultricies risus sed gravida ullamcorper. In in elementum mi.</p>
            </React.Fragment>
        )
    }
}