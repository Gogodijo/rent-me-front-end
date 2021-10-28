import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  }
}))

const Acc = () => {

  const classes = useStyles()

  return (
    <div>
      <Typography variant="h4" className={classes.header}>Saavutettavuusseloste</Typography>
      <Typography variant="body1">Sed tempor arcu quis eros mattis mollis. Maecenas aliquam, nisl vel egestas molestie, nulla velit fringilla sapien, vitae tincidunt odio augue vitae nisi. Aenean in quam faucibus, tempor odio cursus, tempor leo. Nullam nec arcu tempor, venenatis quam ac, euismod mauris. Pellentesque enim augue, accumsan ac tristique nec, ornare vitae felis. Etiam faucibus efficitur nisi, et luctus odio vestibulum id. Morbi maximus luctus sem interdum dictum.

        Aenean faucibus posuere nulla at posuere. Vestibulum sollicitudin eleifend quam eu porttitor. Maecenas sagittis, eros a interdum faucibus, est neque tempus risus, vel ultrices sapien lacus nec massa. Donec pulvinar mollis eros quis volutpat. Morbi gravida in mi accumsan eleifend. Praesent eleifend varius justo id efficitur. Donec lectus arcu, lacinia quis sagittis ac, volutpat eu lorem. Suspendisse nec tortor libero.

        Vestibulum consectetur tristique nunc ut tincidunt. Mauris eget scelerisque ex. Nunc bibendum luctus eros. Sed ultricies nisl eu turpis pulvinar, vel rutrum sapien suscipit. Fusce sit amet erat dolor. Vestibulum at risus urna. Nunc lobortis interdum ultricies. Morbi fringilla sapien nibh, non convallis leo ultricies sodales.

        Nulla facilisi. Donec vehicula tortor sed purus dignissim, sit amet elementum justo porttitor. Quisque vulputate, felis eget rutrum rutrum, mauris purus vehicula ante, eu lobortis arcu mauris a turpis. Suspendisse ultrices pretium ex, id tincidunt nulla pharetra a. Proin auctor mi et libero pellentesque euismod. Quisque mollis neque porta nulla imperdiet, in maximus velit mattis. Etiam aliquam eget erat eu viverra. Maecenas ultrices sapien sapien, nec venenatis lorem commodo convallis. Integer pretium nibh sit amet eleifend dignissim. Etiam accumsan sagittis bibendum.

        Proin blandit sem at ipsum porta pharetra. Pellentesque id luctus justo. Fusce fermentum scelerisque nunc ac pharetra. Nam dapibus lobortis diam eu aliquet. Quisque scelerisque quam a tristique aliquet. Nulla bibendum et est quis suscipit. Morbi id mauris pretium, mattis sapien vel, vehicula neque. Cras nunc leo, dictum ut ligula in, imperdiet scelerisque ex. Integer at est sem. Integer a egestas nisi. Morbi rhoncus, tortor id mattis pulvinar, lectus mi vestibulum nisi, quis viverra turpis leo eget ipsum.

        Morbi dictum arcu augue, in rhoncus orci elementum pellentesque. Mauris varius purus nec eros pulvinar, eget mollis leo mattis. Vivamus eu congue lorem. Proin varius sapien vel enim fermentum, quis congue arcu imperdiet. Nulla varius, felis quis elementum pulvinar, quam felis congue nulla, in bibendum elit tortor ac neque. Praesent rhoncus dui at enim feugiat, sit amet suscipit sapien ullamcorper. Duis mattis sodales orci, sit amet bibendum nunc finibus et. Cras lobortis fringilla est, eget placerat neque tempor id. Curabitur non libero sit amet arcu faucibus consequat eget a dolor. Praesent sit amet nulla erat. In lectus elit, fringilla vel lectus eu, luctus venenatis lacus.

        Integer vitae suscipit odio. Suspendisse non purus eget neque euismod faucibus eget id elit. Pellentesque venenatis nulla quis dictum tincidunt. Sed suscipit enim non elit interdum, ac tristique erat fermentum. Pellentesque iaculis eleifend molestie. Phasellus feugiat massa a lacus euismod lobortis. Duis enim dolor, sollicitudin nec nisi eu, elementum bibendum lacus.

        Etiam et nisl eros. Proin id augue ornare, tincidunt ex et, auctor lectus. Nullam luctus non tortor sodales vehicula. Fusce varius ornare tellus, non semper tellus mollis id. Vivamus erat mi, posuere in porta ac, lacinia eget erat. Nullam lacinia tellus eget diam tempus facilisis. Cras malesuada ligula sed ante ultricies pellentesque. Ut tortor sapien, dignissim ornare est et, convallis venenatis sem. Nulla eget pharetra ex. Praesent dapibus turpis ut sapien egestas posuere non eget sem. Proin vulputate, nunc non imperdiet iaculis, arcu velit interdum massa, nec venenatis ipsum neque at lacus.</Typography>
    </div>
  )
}

export default Acc