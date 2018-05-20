<template>
    <div>
        <h2>选择排序</h2>
        <div id="flip-list-demo" class="demo">
            <!-- <div>{{step}} - {{stepLock}}</div> -->
            <div>{{pointer}}</div>
            <button @click="rush">Sort</button>
            <button @click="next">Next</button>
            <transition-group name="flip-list" tag="ul">
                <li v-for="(item, _) in array" :key="item" :style="{color: _ === pointer.i || _ === pointer.j ? 'red' : 'black'}">
                {{ item }}
                </li>
            </transition-group>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import _ from 'lodash'

function delay(duration) {
    return new Promise(r => setTimeout(r, duration))
}

export default {
    data () {
        return {
            array: [],
            len: 10,
            duration: 1000,
            pointer: {i: -1, j: -1},
            step: 0,
            stepLock: 0
        }
    },
    mounted () {
        const s = new Set()
        while (s.size < this.len) {
            s.add(_.random(0, this.len * 10))
        }
        this.array = [...s]
    },
    methods: {
        async swap (i, j) {
            const t = this.array[i]
            this.$set(this.array, i, this.array[j])
            this.$set(this.array, j, t)
            await delay(this.duration)
        },
        nextStep () {
            return new Promise(resolve => {
                const check = () => {
                    if (this.step < this.stepLock) {
                        this.step += 1
                        resolve()
                    } else {
                        requestAnimationFrame(check)
                    }
                }
                check()
            })
        },
        async sort () {
            const len = this.len
            for (let i = 0; i < len - 1; ++i) {
                this.pointer = Object.assign(this.pointer, { i })
                for (let j = i + 1; j < len; ++j) {

                    this.pointer = Object.assign(this.pointer, { j })
                    if (this.array[i] > this.array[j]) {
                        await this.swap(i, j)
                    } else {
                        await delay(this.duration / 4)
                    }
                    await this.nextStep()
                }
            }
            this.pointer.i = this.pointer.j = this.len
        },
        next () {
            if (!this.stepLock) {
                this.step += 1
                this.sort()
            }
            this.stepLock += 1
        },
        rush () {
            if (!this.stepLock) {
                this.sort()
            }
            this.stepLock = Infinity
        }
    }
}
</script>

<style>
    .flip-list-move {
        transition: transform 1s;
    }
</style>
